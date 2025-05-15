import React, { useState } from 'react';
import './App.css';
import { BonusCalculator } from './components/BonusCalculator';
import { PaymentDetails } from './components/PaymentDetails';
import { SuccessPopup } from './components/SuccessPopup';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('card');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCurrentStep(1);
  };

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleConfirm = () => {
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setCurrentStep(0);
  };

  return (
    <div className="app">
      {currentStep === 0 && (
        <BonusCalculator
          onAmountSelect={handleAmountSelect}
          onBack={() => {}}
        />
      )}

      {currentStep === 1 && (
        <PaymentDetails
          amount={selectedAmount || 100}
          paymentMethod={selectedPaymentMethod}
          onBack={handleBack}
          onConfirm={handleConfirm}
        />
      )}

      {showSuccess && (
        <SuccessPopup
          amount={selectedAmount || 100}
          bonusAmount={(selectedAmount || 100) * 0.1}
          onClose={handleCloseSuccess}
        />
      )}
    </div>
  );
}

export default App; 