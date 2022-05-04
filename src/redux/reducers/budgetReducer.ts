import { IBudget, BudgetAction, BudgetTypes } from '../../types/budget';

export interface BudgetState {
  budgets: IBudget[];
}

const initialState: BudgetState = {
  budgets: [],
};

const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetAction
) => {
  switch (action.type) {
    case BudgetTypes.INITIALIZE_BUDGET:
      return {
        ...state,
        budgets: action.payload,
      };
    case BudgetTypes.ADD_BUDGET:
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    case BudgetTypes.REMOVE_BUDGET:
      return {
        ...state,
        budgets: [
          ...state.budgets.filter((budget) => budget.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default budgetReducer;
