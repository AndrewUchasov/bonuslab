export interface Bonus {
  id: string;
  percentage: number;
  wager: number;
  minDeposit: number;
  popularity?: number;
  isCustom?: boolean;
}

export interface BonusCalculatorState {
  selectedPercentage: number;
  selectedWager: number;
  calculatedMinDeposit: number;
  estimatedBonusValue: number;
}

export interface BonusMetrics {
  totalActivations: number;
  calculatorOpenings: number;
  successfulCalculatorDeposits: number;
  failedCalculatorDeposits: number;
  averageBonusesPerUser: number;
  popularCombinations: Array<{
    percentage: number;
    wager: number;
    count: number;
  }>;
  cancelledBonuses: number;
  fullyWageredBonuses: number;
} 