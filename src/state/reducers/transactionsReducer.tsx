import { IAction, ITransactionsState } from "../models";

const INITIAL_STATE: ITransactionsState = {
  transactions: [],
  showTransactionAddedSuccessAlert: false,
};

const transactionsReducer = (
  state: ITransactionsState = INITIAL_STATE,
  action: IAction
) => {
  switch (action.type) {
    case "TRANSACTIONS_SUCCESS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "ADD_TRANSACTION_SUCCESS":
      return {
        ...state,
        showTransactionAddedSuccessAlert: true,
        transactions: action.payload,
      };
    case "RESET_TRANSACTION_ADD_ALERT":
      return {
        ...state,
        showTransactionAddedSuccessAlert: false,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
