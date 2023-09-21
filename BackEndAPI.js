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

app.post("/validate-cvv-digit-count", (req, res) => {
  const { cardNumber, cvv } = req.body;
  const { cardNumber: clearInput } = PANCountValidation(cardNumber);
  const isAmericanExpress = CardNetworkCheck(clearInput);

  const { cvv: clearCVV, length: maxLength } = CVVCountValidation(cvv, isAmericanExpress);
  console.log(CVVCountValidation(cvv, isAmericanExpress));
  console.log("maxlength: ", maxLength)
  res.json({success: (clearCVV.length == maxLength)});
});

app.post("/validate-card-luhns-algorithm", (req, res) => {
  const { cardNumber } = req.body;
  res.json({ success: LuhnsAlgorithmLastDigitCheck(cardNumber) });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/validate-name-is-not-empty", (req, res) =>{
  const { cardHolder } = req.body;
  res.json({ success: (cardHolder.length > 1)});
});
