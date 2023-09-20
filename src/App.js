import { Container, Bottom, TextField, Typography, Paper, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import './App.css';

function App() {
  return (
    <Container style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: 'center'}}>
      <Paper style={{ width: "35%", height: "50%", padding: "40px"}} elevation={7}>
        <Typography variant="h4" style={{ paddingBottom: '20px' }}>Payment Info</Typography>
        <hr></hr>
        <TextField variant="standard" label="Card number" style={{ marginTop: "20px", marginBottom: "40px", width: '100%' }}></TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="MM/YY" views={["month", "year"]} style={{marginBottom: "40px"}}></DatePicker>
        </LocalizationProvider>
        <TextField variant="standard" label="CVV" style={{ marginBottom: "20px", width: '20%', marginLeft: '20px'}}></TextField>
        <TextField variant="standard" label="Holder's name" style={{ marginBottom: "40px", width: "80%" }}></TextField>
        <br></br>
        <Button variant="contained">Pay now</Button>
      </Paper>
    </Container>
  );
}

export default App;
