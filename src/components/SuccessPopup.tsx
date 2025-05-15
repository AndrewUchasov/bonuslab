import React from 'react';
import './SuccessPopup.css';

interface SuccessPopupProps {
  onClose: () => void;
  amount: number;
  bonusAmount: number;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({
  onClose,
  amount,
  bonusAmount
}) => {
  return (
    <div className="success-popup-overlay">
      <div className="success-popup">
        <div className="success-icon">✓</div>
        <h3>Payment Successful!</h3>
        <div className="success-details">
          <div className="detail-row">
            <span>Deposit Amount:</span>
            <span>${amount.toFixed(2)}</span>
          </div>
          <div className="detail-row">
            <span>Bonus Added:</span>
            <span className="bonus">+${bonusAmount.toFixed(2)}</span>
          </div>
          <div className="detail-row total">
            <span>Total Balance:</span>
            <span>${(amount + bonusAmount).toFixed(2)}</span>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}; 