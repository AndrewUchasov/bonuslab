import React, { useState } from 'react';
import { PaymentMethodSelector } from './components/PaymentMethodSelector';
import { ProgressBar } from './components/ProgressBar';
import { BonusCalculator } from './components/BonusCalculator';
import { PaymentDetails } from './components/PaymentDetails';
import './App.css';

const STEPS = ['Bonus Calculator', 'Payment Method', 'Payment Details'];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleStart = () => {
    setShowModal(true);
    setCurrentStep(0);
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep === 0) {
      setShowModal(false);
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleCalculate = (amount: number) => {
    setSelectedAmount(amount);
    handleNext();
  };

  const handleConfirm = () => {
    // Тут буде логіка підтвердження платежу
    console.log('Payment confirmed');
  };

  return (
    <div className="app">
      {!showModal ? (
        <div className="start-screen">
          <button className="start-button" onClick={handleStart}>
            Start
          </button>
        </div>
      ) : (
        <div className="modal">
          <div className="modal-content">
            <ProgressBar steps={STEPS} currentStep={currentStep} />
            
            {currentStep === 0 && (
              <BonusCalculator
                onCalculate={handleCalculate}
                onBack={handleBack}
              />
            )}

            {currentStep === 1 && (
              <PaymentMethodSelector
                amount={selectedAmount || 100}
                onSelect={handleNext}
                onBack={handleBack}
              />
            )}

            {currentStep === 2 && (
              <PaymentDetails
                amount={selectedAmount || 100}
                onBack={handleBack}
                onConfirm={handleConfirm}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 