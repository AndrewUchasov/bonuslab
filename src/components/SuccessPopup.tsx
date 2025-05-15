import React, { useEffect } from 'react';
import './SuccessPopup.css';
import confetti from 'canvas-confetti';

interface SuccessPopupProps {
  onClose: () => void;
  amount: number;
  bonusAmount: number;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({ onClose, amount, bonusAmount }) => {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 2000,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 2000,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="success-popup-overlay">
      <div className="success-popup">
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
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}; 