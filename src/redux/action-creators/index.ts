import { ActionType } from "../action-types"
import { Dispatch } from 'redux';
import { Action } from "../actions";

export const addExpense = (id:number, category:number, description:string, time: Date, amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_EXPENSE,
            id: id,
            category: category,
            description: description,
            time: time,
            payload: amount
        })
    }
}

export const addCategory = (id: number, category: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_CATEGORY,
      id: id,
      payload: category
    });
  };
};

export const removeCategory = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_CATEGORY,
      id: id,
    });
  };
};

