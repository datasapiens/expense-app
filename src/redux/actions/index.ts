import { ActionType } from '../action-types';

interface AddExpenseAction {
  type: ActionType.ADD_EXPENSE;
  id: number;
  category: number;
  description: string;
  time: Date;
  payload: number;
}

interface AddCategoryAction {
  type: ActionType.ADD_CATEGORY;
  id: number;
  payload: string;
}

interface RemoveCategoryAction {
  type: ActionType.REMOVE_CATEGORY;
  id: number;
}

export type Action =
  | AddExpenseAction
  | AddCategoryAction
  | RemoveCategoryAction;
