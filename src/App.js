import PaymentForm from './PaymentForm';
import AnimatedBackground from "./Particles";
import { Helmet } from 'react-helmet';

import './App.css';

function App() {

  return (
    <div>
      <AnimatedBackground/>
      <Helmet>
        <title>Payment Process</title>
      </Helmet>
      <PaymentForm/>
    </div>
  );
}

export default App;
