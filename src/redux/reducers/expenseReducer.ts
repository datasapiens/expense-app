import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface Expense {
    id: number,
    category: number,
    description: string,
    time: Date,
    amount: number
}

interface State {
  expenseList: Expense[];
  totalAmount: number;
}

const initialState: State = {
  expenseList: [],
  totalAmount: 0
};

const expenseReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_EXPENSE:
        state.expenseList = [...state.expenseList, {id: action.id, category: action.category, description: action.description, time:action.time, amount: action.payload}]
        state.totalAmount = +state.totalAmount + +action.payload
        return state;
    default:
      return state;
  }
};
export default expenseReducer;
