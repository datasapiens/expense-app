import { Transaction } from "../../redux/initial-state.model";

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';
export const GET_TRANSACTIONS_FAILURE = 'GET_TRANSACTIONS_FAILURE';

export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const CREATE_TRANSACTION_SUCCESS = 'CREATE_TRANSACTION_SUCCESS';
export const CREATE_TRANSACTION_FAILURE = 'CREATE_TRANSACTION_FAILURE';

export interface GetTransactionsAction {
  type: string;
}
export const getTransactions = (): GetTransactionsAction => ({
  type: GET_TRANSACTIONS,
})

export interface GetTransactionsSuccessAction {
  type: string;
  transactions: Transaction[];
}
export const getTransactionsSuccess = (response: Transaction[]): GetTransactionsSuccessAction => ({
  type: GET_TRANSACTIONS_SUCCESS,
  transactions: [ ...response ],
})

export interface GetTransactionsFailureAction {
  type: string;
  error: any;
}
export const getTransactionsFailure = (error?: any): GetTransactionsFailureAction => ({
  type: GET_TRANSACTIONS_FAILURE,
  error: error ? { ...error } : null,
})

export interface CreateTransactionAction {
  type: string;
  transaction: Transaction;
}
export const createTransaction = (transaction: Transaction): CreateTransactionAction => ({
  type: CREATE_TRANSACTION,
  transaction: { ...transaction }
})

export interface CreateTransactionSuccessAction {
  type: string;
  transaction: Transaction;
}
export const createTransactionSuccess = (response: Transaction): CreateTransactionSuccessAction => ({
  type: CREATE_TRANSACTION_SUCCESS,
  transaction: { ...response },
})

export interface CreateTransactionFailureAction {
  type: string;
  error: any;
}
export const createTransactionFailure = (error?: any): CreateTransactionFailureAction => ({
  type: CREATE_TRANSACTION_FAILURE,
  error: error ? { ...error } : null,
})