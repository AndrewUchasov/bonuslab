import { Bonus, BonusCalculatorState, BonusMetrics } from '../types/bonus';

export const mockBonuses: Bonus[] = [
  {
    id: '1',
    percentage: 100,
    wager: 20,
    minDeposit: 20,
    popularity: 85
  },
  {
    id: '2',
    percentage: 50,
    wager: 15,
    minDeposit: 10,
    popularity: 65
  },
  {
    id: '3',
    percentage: 200,
    wager: 40,
    minDeposit: 50,
    popularity: 45
  }
];

export const calculateMockBonus = async (
  percentage: number,
  wager: number
): Promise<BonusCalculatorState> => {
  // Імітація затримки мережі
  await new Promise(resolve => setTimeout(resolve, 500));

  const minDeposit = Math.max(10, Math.ceil(percentage / 5));
  const estimatedBonus = Math.ceil(minDeposit * (percentage / 100));

  return {
    selectedPercentage: percentage,
    selectedWager: wager,
    calculatedMinDeposit: minDeposit,
    estimatedBonusValue: estimatedBonus
  };
};

export const mockMetrics: BonusMetrics = {
  totalActivations: 1500,
  calculatorOpenings: 800,
  successfulCalculatorDeposits: 400,
  failedCalculatorDeposits: 200,
  averageBonusesPerUser: 2.5,
  popularCombinations: [
    { percentage: 100, wager: 20, count: 500 },
    { percentage: 50, wager: 15, count: 300 },
    { percentage: 200, wager: 40, count: 200 }
  ],
  cancelledBonuses: 100,
  fullyWageredBonuses: 800
}; 