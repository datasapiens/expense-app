import * as actionTypes from "./actionTypes";

export function addTransaction(transaction: Transaction) {
  const action: DataAction = {
    type: actionTypes.ADD_TRASNACTION,
    transaction,
    category: { id: 1, label: "ss" },
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function addCategory(category: Category) {
  const action: DataAction = {
    type: actionTypes.ADD_CATEGORY,
    category,
    transaction: { id: 1, label: "string", date: new Date(), amount: 1, category: 1 },
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function removeCategory(category: Category) {
  const action: DataAction = {
    type: actionTypes.REMOVE_CATEGORY,
    category,
    transaction: { id: 1, label: "string", date: new Date(), amount: 1, category: 1 },
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
