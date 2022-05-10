import { ITransaction } from "../../../interfaces";
import { TransactionActionTypeConstants } from "./transaction.constants";

export interface ITransactionActionType {
  type: TransactionActionTypeConstants;
  payload: ITransaction | string;
}
