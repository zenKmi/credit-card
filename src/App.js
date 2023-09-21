import { Container, Bottom, TextField, Typography, Paper, Button, Card } from '@mui/material';
import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { CVVCountValidation, PANCountValidation, CardNetworkCheck, LuhnsAlgorithmLastDigitCheck } from './Utils';

import './App.css';
import dayjs from 'dayjs';

function App() {

  const [cardNumber, setCardNumber] = useState('');
  const [errorText, setErrorText] = useState('');
  const [cvvError, setCVVError] = useState('');
  const [isAmericanExpress, setIsAmericanExpress] = useState('');
  const [cvv, setCVV] = useState('');
  const today = dayjs().add(1, 'month');

  const [ cardNumberValid, setCardNumberValid ] = useState("");
  const [ cvvValid, setCVVValid ] = useState("");
  const [ cardHolderValid, setCardHolderValid ] = useState("");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handlePayNow = () => {
    if (cardNumberValid && cvvValid && cardHolderValid){
      setOpen(true);
    } else {
      //Fail
      console.log(cardNumberValid + " " + cvvValid + " " + cardHolderValid);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleInputChange(event) {
    const input = event.target.value;
    if (event.target.id === "cardNumber"){
      const { cardNumber, errorText } = PANCountValidation(input);

      setIsAmericanExpress(CardNetworkCheck(input));

      if (!CardNetworkCheck(input)) setCVV(cvv.slice(0, 3));

      setCardNumberValid((input.length >= 16) ? LuhnsAlgorithmLastDigitCheck(cardNumber) : false);

      setErrorText(errorText);
      setCardNumber(cardNumber);

    } else if (event.target.id === "cvv"){
      const { cvv, cvvError } = CVVCountValidation(input, isAmericanExpress);

      if (cvv.length == (isAmericanExpress) ? 4 : 3){
        setCVVValid(true);
      } else {
        setCVVValid(false);
      }

      setCVV(cvv);
      setCVVError(cvvError);

    } else if (event.target.id === "cardholder"){
      if (input.length >= 1){
        setCardHolderValid(true);
      } else {
        setCardHolderValid(false);
      }
    }
  }

  return (
    <Container style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: 'center'}}>
      <Paper style={{ width: "35%", height: "50%", padding: "40px"}} elevation={7}>
        <Typography variant="h4" style={{ paddingBottom: '20px' }}>Payment Info</Typography>

        <hr></hr>
        
        <TextField id="cardNumber" variant="standard" label="Card number" style={{ marginTop: "20px", marginBottom: "40px", width: '100%' }} autoFocus={true} value={cardNumber} onChange={handleInputChange} helperText={errorText} error={!!errorText}></TextField>
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="MM/YY" views={["month", "year"]} style={{marginBottom: "40px"}} minDate={today} slotProps={{textField: {disabled: true}}}/>
        </LocalizationProvider>
        
        <TextField id="cvv" variant="standard" label="CVV/CVC" style={{ marginBottom: "20px", width: '20%', marginLeft: '20px'}} value={cvv} onChange={handleInputChange} helperText={cvvError} error={!!cvvError}></TextField>
        
        <TextField id="cardholder" variant="standard" label="Cardholder's name" style={{ marginBottom: "40px", width: "80%" }} onChange={handleInputChange}></TextField>
        
        <br></br>
        
        <Button variant="contained" onClick={handlePayNow}>Pay now</Button>
      </Paper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Payment process has been succesful!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
