import React from 'react';
import './SuccessScreen.css';

interface SuccessScreenProps {
  onClose: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ onClose }) => {
  return (
    <div className="success-screen">
      <div className="success-content">
        <div className="success-icon">✓</div>
        <h2>Payment Successful!</h2>
        <p>Your bonus has been activated successfully.</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}; 