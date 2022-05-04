export interface IBudget {
  id: string;
  label: string;
}

export enum BudgetTypes {
  INITIALIZE_BUDGET = 'INITIALIZE_BUDGET',
  ADD_BUDGET = 'ADD_BUDGET',
  REMOVE_BUDGET = 'REMOVE_BUDGET',
}

interface InitializeBudgetAction {
  type: BudgetTypes.INITIALIZE_BUDGET;
  payload: IBudget[];
}

interface AddBudgetAction {
  type: BudgetTypes.ADD_BUDGET;
  payload: IBudget;
}

interface RemoveBudgetAction {
  type: BudgetTypes.REMOVE_BUDGET;
  payload: string;
}

export type BudgetAction =
  | AddBudgetAction
  | RemoveBudgetAction
  | InitializeBudgetAction;
