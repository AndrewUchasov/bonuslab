import React, { useState } from 'react';
import './PaymentMethodSelector.css';

interface PaymentMethodSelectorProps {
  amount: number;
  onSelect: (method: string) => void;
  onBack: () => void;
}

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  amount,
  onSelect,
  onBack
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleSelect = (method: string) => {
    setSelectedMethod(method);
    onSelect(method);
  };

  return (
    <div className="payment-method-container">
      <div className="payment-method-content">
        <div className="payment-methods">
          <h3>Select Payment Method</h3>
          <button
            className={`payment-method-btn ${selectedMethod === 'visa' ? 'selected' : ''}`}
            onClick={() => handleSelect('visa')}
          >
            <div className="payment-method-icon visa-icon">VISA</div>
            <div className="payment-method-info">
              <div className="payment-method-name">Visa</div>
              <div className="payment-method-description">Credit/Debit Card</div>
            </div>
            <div className="payment-method-arrow">→</div>
          </button>

          <button
            className={`payment-method-btn ${selectedMethod === 'mastercard' ? 'selected' : ''}`}
            onClick={() => handleSelect('mastercard')}
          >
            <div className="payment-method-icon mastercard-icon">MC</div>
            <div className="payment-method-info">
              <div className="payment-method-name">Mastercard</div>
              <div className="payment-method-description">Credit/Debit Card</div>
            </div>
            <div className="payment-method-arrow">→</div>
          </button>
        </div>
      </div>

      <div className="payment-method-buttons">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}; 