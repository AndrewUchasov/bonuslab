import React, { useState } from 'react';
import './PaymentForm.css';

interface PaymentFormProps {
  amount: number;
  onComplete: () => void;
  onBack: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({
  amount,
  onComplete,
  onBack
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    onComplete();
  };

  return (
    <div className="payment-form">
      <div className="payment-form-content">
        <div className="payment-amount">
          <span>Amount to Pay:</span>
          <span className="amount">${amount}</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength={3}
              />
            </div>
          </div>

          <div className="payment-form-buttons">
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Processing...' : 'Complete Payment'}
            </button>
            <button type="button" className="back-button" onClick={onBack}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 