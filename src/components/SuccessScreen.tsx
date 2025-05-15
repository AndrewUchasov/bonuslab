import React from 'react';
import './SuccessScreen.css';

interface SuccessScreenProps {
  amount: number;
  onBack: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ amount, onBack }) => {
  const bonusAmount = amount * 0.1;

  return (
    <div className="success-screen">
      <div className="success-content">
        <div className="success-icon">✓</div>
        <h2>Payment Successful!</h2>
        <div className="success-details">
          <p>Your deposit has been processed successfully.</p>
          <div className="amount-details">
            <div className="amount-row">
              <span>Deposit Amount:</span>
              <span className="amount">${amount.toFixed(2)}</span>
            </div>
            <div className="amount-row">
              <span>Bonus Added:</span>
              <span className="amount bonus">+${bonusAmount.toFixed(2)}</span>
            </div>
            <div className="amount-row total">
              <span>Total Balance:</span>
              <span className="amount">${(amount + bonusAmount).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <button className="back-button" onClick={onBack}>
          Back to Home
        </button>
      </div>
    </div>
  );
}; 