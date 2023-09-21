import PaymentForm from './PaymentForm';
import AnimatedBackground from "./Particles";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './App.css';

function App() {

  return (
    <HelmetProvider>
      <div>
        <AnimatedBackground />
        <Helmet>
          <title>Payment Process</title>
        </Helmet>
        <PaymentForm />
      </div>
    </HelmetProvider>
  );
}

export default App;
