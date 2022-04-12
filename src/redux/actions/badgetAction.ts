import { IBudget, BudgetTypes } from '../../types/budget';
import {
  setLocalStorageValue,
  getLocalStorageValue,
} from '../../utils/helpers';

export const initializeBudget = (budgets: IBudget[]) => {
  return {
    type: BudgetTypes.INITIALIZE_BUDGET,
    payload: budgets,
  };
};

export const addBudget = (budget: IBudget) => {
  const storedBudgets: IBudget[] = getLocalStorageValue('budgets');
  console.log(storedBudgets);
  setLocalStorageValue<IBudget[]>('budgets', [...storedBudgets, budget]);

  return {
    type: BudgetTypes.ADD_BUDGET,
    payload: budget,
  };
};

export const removeBudget = (id: string) => {
  const storedBudgets: IBudget[] = getLocalStorageValue('budgets');
  setLocalStorageValue<IBudget[]>('budgets', [
    ...storedBudgets.filter((budget) => budget.id !== id),
  ]);

  return {
    type: BudgetTypes.REMOVE_BUDGET,
    payload: id,
  };
};
