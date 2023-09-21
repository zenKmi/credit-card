import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import AnimatedBackground from "./Particles";

import './App.css';

function App() {

  return (
    <div>
      <AnimatedBackground/>
      <PaymentForm/>
    </div>
  );
}

export default App;
