import React, { useState } from 'react';
import './App.css';
import { BonusCalculator } from './components/BonusCalculator';
import { PaymentDetails } from './components/PaymentDetails';
import { SuccessScreen } from './components/SuccessScreen';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('card');

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCurrentStep(2);
  };

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleConfirm = () => {
    setCurrentStep(3);
  };

  return (
    <div className="app">
      {currentStep === 0 && (
        <div className="welcome-screen">
          <h1>Welcome to BonusLab</h1>
          <p>Get your bonus in just a few steps!</p>
          <button className="start-button" onClick={handleStart}>
            Start
          </button>
        </div>
      )}

      {currentStep === 1 && (
        <BonusCalculator
          onAmountSelect={handleAmountSelect}
          onBack={handleBack}
        />
      )}

      {currentStep === 2 && (
        <PaymentDetails
          amount={selectedAmount || 100}
          paymentMethod={selectedPaymentMethod}
          onBack={handleBack}
          onConfirm={handleConfirm}
        />
      )}

      {currentStep === 3 && (
        <SuccessScreen
          amount={selectedAmount || 100}
          onBack={() => setCurrentStep(0)}
        />
      )}
    </div>
  );
}

export default App; 