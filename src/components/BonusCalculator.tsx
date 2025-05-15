import React, { useState } from 'react';
import './BonusCalculator.css';

interface BonusCalculatorProps {
  onAmountSelect: (amount: number) => void;
  onBack: () => void;
}

export const BonusCalculator: React.FC<BonusCalculatorProps> = ({
  onAmountSelect,
  onBack
}) => {
  const [amount, setAmount] = useState<number>(100);
  const bonusAmount = amount * 0.1;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAmountSelect(amount);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-content">
        <h2>Calculate Your Bonus</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Enter Amount</label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              min="10"
              max="1000"
              step="10"
            />
          </div>

          <div className="calculator-results">
            <div className="result-item">
              <span>Bonus</span>
              <span>${bonusAmount.toFixed(2)}</span>
            </div>
            <div className="result-item">
              <span>Deposit Amount</span>
              <span>${amount.toFixed(2)}</span>
            </div>
            <div className="result-item total">
              <span>Total Balance</span>
              <span>${(amount + bonusAmount).toFixed(2)}</span>
            </div>
          </div>

          <div className="calculator-buttons">
            <button type="button" className="back-button" onClick={onBack}>
              Back
            </button>
            <button type="submit" className="continue-button">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 