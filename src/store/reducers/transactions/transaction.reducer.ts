import { storeConstants, storeTransactionsToLocalStorage } from "../../helpers";
import { IState } from "../types/state.types";
import { ITransactionActionType } from "./transaction.action-types";
import { TransactionActionTypeConstants } from "./transaction.constants";

const transactionReducer = (state: IState[storeConstants.TRANSACTIONS] = [], action: ITransactionActionType) => {
  switch (action.type) {
    case TransactionActionTypeConstants.ADD_TRANSACTION: {
      const newTransactions = [...state, action.payload];
      storeTransactionsToLocalStorage(newTransactions);
      return newTransactions;
    }
    default:
      return state;
  }
};

export const getTransactions = (state: IState) => state[storeConstants.TRANSACTIONS];

export default transactionReducer;
