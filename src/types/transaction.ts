export interface ITransaction {
  id: string;
  label: string;
  date: string;
  amount: number;
  category: string; // ref to category id
}

export enum TransactionTypes {
  INITIALIZE_TRANSACTIONS = 'INITIALIZE_TRANSACTIONS',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  REMOVE_TRANSACTION = 'REMOVE_TRANSACTION',
}

interface InitializeTransactionAction {
  type: TransactionTypes.INITIALIZE_TRANSACTIONS;
  payload: ITransaction[];
}

interface AddTransactionAction {
  type: TransactionTypes.ADD_TRANSACTION;
  payload: ITransaction;
}

interface RemoveTransactionAction {
  type: TransactionTypes.REMOVE_TRANSACTION;
  payload: string;
}

export type TransactionAction =
  | AddTransactionAction
  | RemoveTransactionAction
  | InitializeTransactionAction;
