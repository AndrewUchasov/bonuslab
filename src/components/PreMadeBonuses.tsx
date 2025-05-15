import React, { useState, useEffect } from 'react';
import { Bonus } from '../types/bonus';
import { bonusService } from '../services/bonusService';
import './PreMadeBonuses.css';

interface PreMadeBonusesProps {
  onBonusSelect: (bonus: Bonus) => void;
}

export const PreMadeBonuses: React.FC<PreMadeBonusesProps> = ({ onBonusSelect }) => {
  const [bonuses, setBonuses] = useState<Bonus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBonuses = async () => {
      try {
        const data = await bonusService.getPreMadeBonuses();
        setBonuses(data);
      } catch (err) {
        setError('Failed to load bonuses');
      } finally {
        setLoading(false);
      }
    };

    fetchBonuses();
  }, []);

  const getPopularityText = (popularity: number): string => {
    if (popularity >= 80) return 'Very Popular';
    if (popularity >= 60) return 'Popular';
    if (popularity >= 40) return 'Moderate';
    return 'New';
  };

  if (loading) {
    return <div className="loading">Loading bonuses...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="pre-made-bonuses">
      <div className="bonuses-header">
        <h2>Choose Your Bonus</h2>
      </div>

      <p className="bonuses-description">
        Select from our most popular bonuses or create your own custom bonus to maximize your gaming experience.
      </p>

      <div className="bonuses-list">
        {bonuses.map((bonus) => (
          <div 
            key={bonus.id} 
            className="bonus-card"
            onClick={() => onBonusSelect(bonus)}
          >
            <div className="bonus-icon">🎁</div>
            <div className="bonus-content">
              <div className="bonus-header">
                <h3>{bonus.percentage}% Bonus</h3>
                <span className="popularity">
                  {getPopularityText(bonus.popularity || 0)}
                </span>
              </div>
              <div className="bonus-details">
                <p>Wager: {bonus.wager}x</p>
                <p>Min Deposit: ${bonus.minDeposit}</p>
              </div>
            </div>
            <div className="bonus-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
}; 