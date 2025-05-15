import React, { useState } from 'react';
import './BonusCalculator.css';

interface BonusCalculatorProps {
  onCalculate: (amount: number) => void;
  onBack: () => void;
}

const PERCENTAGE_CHIPS = [10, 20, 30, 50, 70];
const WAGER_CHIPS = [10, 20, 30, 40];

const MIN_DEPOSIT = 50;
const MAX_WAGER = 40;

const POPULAR_BONUSES = [
  { percentage: 10, wager: 10, label: '10% / 10x', maxBonus: 100, activationTime: '24 hours', deposit: 200, userPercentage: 75 },
  { percentage: 30, wager: 20, label: '30% / 20x', maxBonus: 50, activationTime: '24 hours', deposit: 300, userPercentage: 71 },
  { percentage: 70, wager: 40, label: '70% / 40x', maxBonus: 25, activationTime: '24 hours', deposit: 350, userPercentage: 65 }
];

export const BonusCalculator: React.FC<BonusCalculatorProps> = ({
  onCalculate,
  onBack
}) => {
  const [percentage, setPercentage] = useState<number>(POPULAR_BONUSES[0].percentage);
  const [wager, setWager] = useState<number>(POPULAR_BONUSES[0].wager);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const selectedBonus = POPULAR_BONUSES.find(b => b.percentage === percentage && b.wager === wager) || POPULAR_BONUSES[0];

  // Розрахунок депозиту за формулою: D = 50 × (B / 10) × (40 / W)
  const calculatedDeposit = Math.max(
    Math.round(MIN_DEPOSIT * (percentage / 10) * (MAX_WAGER / wager)),
    MIN_DEPOSIT
  );

  // Використовуємо розрахований депозит
  const deposit = calculatedDeposit;
  const bonusAmount = Math.round(deposit * (percentage / 100));

  console.log('Розрахунок:', {
    percentage,
    wager,
    calculatedDeposit,
    bonusAmount,
    total: deposit + bonusAmount
  });

  const handlePercentageChange = (value: number) => {
    setPercentage(value);
  };

  const handleWagerChange = (value: number) => {
    setWager(value);
  };

  const handlePopularBonusSelect = (bonus: typeof POPULAR_BONUSES[0]) => {
    setPercentage(bonus.percentage);
    setWager(bonus.wager);
  };

  const handleCalculate = () => {
    onCalculate(deposit);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-content">
        <div className="popular-bonuses">
          <h3>Popular Bonus Combinations</h3>
          <div className="popular-bonuses-grid">
            {POPULAR_BONUSES.map((bonus, index) => (
              <button
                key={index}
                className={`popular-bonus-btn ${percentage === bonus.percentage && wager === bonus.wager ? 'selected' : ''}`}
                onClick={() => handlePopularBonusSelect(bonus)}
              >
                {bonus.label}
              </button>
            ))}
          </div>
          {POPULAR_BONUSES.some(bonus => bonus.percentage === percentage && bonus.wager === wager) && (
            <div className="popular-bonus-stats">
              <span className="credited-amount">{selectedBonus.userPercentage}% of users choose this combination</span>
            </div>
          )}
        </div>

        <div className="calculator-settings">
          <div className="setting-group">
            <label>Bonus Percentage</label>
            <div className="chips-container">
              {PERCENTAGE_CHIPS.map((value) => (
                <button
                  key={value}
                  className={`chip ${percentage === value ? 'selected' : ''}`}
                  onClick={() => handlePercentageChange(value)}
                >
                  {value}%
                </button>
              ))}
            </div>
          </div>

          <div className="setting-group">
            <label>Wager Requirement</label>
            <div className="chips-container">
              {WAGER_CHIPS.map((value) => (
                <button
                  key={value}
                  className={`chip ${wager === value ? 'selected' : ''}`}
                  onClick={() => handleWagerChange(value)}
                >
                  {value}x
                </button>
              ))}
            </div>
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
                  <span>${selectedBonus.maxBonus}</span>
                </div>
                <div className="detail-item">
                  <span>Activation Time</span>
                  <span>{selectedBonus.activationTime}</span>
                </div>
                <div className="detail-item">
                  <span>Wager Requirement</span>
                  <span>{wager}x</span>
                </div>
                <a href="#" className="terms-link">Bonuses Terms & Conditions</a>
              </div>
            )}
          </div>
          <div className="result-item total">
            <span>Deposit Amount</span>
            <span>${deposit.toFixed(2)}</span>
          </div>
          <div className="result-item">
            <span className="credited-amount">${(deposit + bonusAmount).toFixed(2)} will be credited to your balance</span>
          </div>
        </div>
      </div>

      <div className="calculator-buttons">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <button className="calculate-button" onClick={handleCalculate}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}; 