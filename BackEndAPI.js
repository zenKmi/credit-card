require = require("esm")(module /*, options*/);

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  PANCountValidation,
  CVVCountValidation,
  CardNetworkCheck,
  LuhnsAlgorithmLastDigitCheck,
} = require("./src/Utils");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/validate-credit-card", (req, res) => {
  console.log("1");
  const { cardNumber, cvv, cardholder, expirationDate } = req.body;

  const { cardNumber: validatedCardNumber, errorText: panErrorText } =
    PANCountValidation(cardNumber);

  const isAmericanExpress = CardNetworkCheck(cardNumber);

  const { cvv: validatedCVV, cvvError: cvvErrorText } = CVVCountValidation(
    cvv,
    isAmericanExpress
  );

  if (!validatedCardNumber || !validatedCVV) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: {
        panErrorText: !validatedCardNumber ? "Invalid PAN" : "",
        cvvErrorText: !validatedCVV ? "Invalid CVV" : "",
      },
    });
  } else {
    res.status(200).json({ success: true, message: "Validation successful" });
  }
});

app.post("/validate-digit-count", (req, res) => {
  const { cardNumber, cvv } = req.body;

  const { cardNumber: validatedCardNumber, errorText: panErrorText} = PANCountValidation(cardNumber);

  const isAmericanExpress = CardNetworkCheck(validatedCardNumber);

  const { cvv: validatedCVV, cvvError: cvvErrorText } = CVVCountValidation(cvv, isAmericanExpress);

  if (cvvErrorText.length > 1 || panErrorText.lenght > 1){
    res.status(400).json({ success: false});
  } else {
    res.status(200).json({ success: true });
  }
});

app.post("/validate-card-luhns-algorithm", (req, res) => {
  const { cardNumber } = req.body;

  const isValid = LuhnsAlgorithmLastDigitCheck(cardNumber);

  res.json({ isValid });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
