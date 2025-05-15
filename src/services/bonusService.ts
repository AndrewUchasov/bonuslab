import { Bonus, BonusCalculatorState, BonusMetrics } from '../types/bonus';
import { mockBonuses, calculateMockBonus, mockMetrics } from '../mocks/bonusData';

// Імітація затримки мережі
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

export const bonusService = {
  // Отримання готових бонусів
  async getPreMadeBonuses(): Promise<Bonus[]> {
    await delay(500); // Імітація затримки мережі
    return mockBonuses;
  },

  // Розрахунок мінімального депозиту та очікуваного бонусу
  async calculateBonus(percentage: number, wager: number): Promise<BonusCalculatorState> {
    await delay(300);
    return calculateMockBonus(percentage, wager);
  },

  // Активація бонусу
  async activateBonus(bonusId: string, paymentMethod: string): Promise<{ success: boolean; message: string }> {
    await delay(1000);
    return {
      success: true,
      message: 'Бонус успішно активовано'
    };
  },

  // Отримання метрик
  async getMetrics(): Promise<BonusMetrics> {
    await delay(800);
    return mockMetrics;
  },

  // Збереження користувацького бонусу
  async saveCustomBonus(bonus: Omit<Bonus, 'id'>): Promise<Bonus> {
    await delay(500);
    return {
      ...bonus,
      id: Math.random().toString(36).substr(2, 9)
    };
  },
}; 