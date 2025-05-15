import React, { useState } from 'react';
import './PaymentDetails.css';
import { SuccessPopup } from './SuccessPopup';

interface PaymentDetailsProps {
  amount: number;
  paymentMethod: string;
  onBack: () => void;
  onConfirm: () => void;
}

export const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  amount,
  paymentMethod,
  onBack,
  onConfirm
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const bonusAmount = amount * 0.1;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleConfirm = () => {
    setShowSuccess(true);
    onConfirm();
  };

  return (
    <div className="payment-details-container">
      <div className="payment-details-content">
        <div className="payment-info">
          <h3>Enter Card Details</h3>
          <div className="info-group">
            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="info-row">
            <div className="info-group">
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="info-group">
              <label>CVV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
          <div className="info-group">
            <label>Cardholder Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
        </div>

        <div className="calculator-results">
          <div className="result-item">
            <span>Bonus</span>
            <span>${bonusAmount.toFixed(2)}</span>
          </div>
          <div className="bonus-details">
            <button className="expand-button" onClick={toggleDetails}>
              <span>Bonus Details</span>
              <span className={`expand-icon ${showDetails ? 'expanded' : ''}`}>▼</span>
            </button>
            {showDetails && (
              <div className="bonus-details-content">
                <div className="detail-item">
                  <span>Bonus Limit</span>
                  <span>$100</span>
                </div>
                <div className="detail-item">
                  <span>Activation Time</span>
                  <span>24 hours</span>
                </div>
                <div className="detail-item">
                  <span>Wager Requirement</span>
                  <span>10x</span>
                </div>
                <a href="#" className="terms-link">Bonuses Terms & Conditions</a>
              </div>
            )}
          </div>
          <div className="result-item total">
            <span>Deposit Amount</span>
            <span>${amount.toFixed(2)}</span>
          </div>
          <div className="result-item">
            <span className="credited-amount">${(amount + bonusAmount).toFixed(2)} will be credited to your balance</span>
          </div>
        </div>
      </div>

      <div className="payment-details-buttons">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm Payment
        </button>
      </div>

      {showSuccess && (
        <SuccessPopup 
          onClose={() => setShowSuccess(false)} 
          amount={amount}
          bonusAmount={bonusAmount}
        />
      )}
    </div>
  );
}; 