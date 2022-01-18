import { ITransaction } from "../../../interfaces";
import { getTransactionsFromLocalStorage, storeConstants, storeTransactionsToLocalStorage } from "../../helpers";
import { IState } from "../types/state.types";
import { ITransactionActionType } from "./transaction.action-types";
import { TransactionActionTypeConstants } from "./transaction.constants";

const transactionReducer = (state: IState[storeConstants.TRANSACTIONS] = [], action: ITransactionActionType) => {
  switch (action.type) {
    case TransactionActionTypeConstants.ADD_TRANSACTION: {
      const newTransactions = [...state, action.payload as ITransaction];
      storeTransactionsToLocalStorage(newTransactions);
      return newTransactions;
    }
    case TransactionActionTypeConstants.UPDATE_TRANSACTION: {
      const transactions: Array<ITransaction> = getTransactionsFromLocalStorage();

      const newTransactions: Array<ITransaction> = transactions.map((transaction: ITransaction) => {
        if (transaction.category === (action.payload as string)) {
          transaction.category = undefined;
        }
        return transaction;
      });
      storeTransactionsToLocalStorage(newTransactions);

      return newTransactions;
    }
    default:
      return state;
  }
};

export const getTransactions = (state: IState) => state[storeConstants.TRANSACTIONS];

export default transactionReducer;
