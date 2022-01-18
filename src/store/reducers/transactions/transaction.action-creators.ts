import { ITransaction } from "../../../interfaces";
import { Dispatch } from "redux";
import { ITransactionActionType } from "./transaction.action-types";
import { TransactionActionTypeConstants } from "./transaction.constants";

export const addTransaction = (transaction: ITransaction) => {
  return (dispatch: Dispatch<ITransactionActionType>) => {
    dispatch({
      type: TransactionActionTypeConstants.ADD_TRANSACTION,
      payload: transaction,
    });
  };
};

export const updateTransaction = (id: string) => {
  return (dispatch: Dispatch<ITransactionActionType>) => {
    dispatch({
      type: TransactionActionTypeConstants.UPDATE_TRANSACTION,
      payload: id,
    });
  };
};
