import { ITransaction, TransactionTypes } from '../../types/transaction';
import {
  setLocalStorageValue,
  getLocalStorageValue,
} from '../../utils/helpers';

export const initializeTransactions = (transactions: ITransaction[]) => {
  return {
    type: TransactionTypes.INITIALIZE_TRANSACTIONS,
    payload: transactions,
  };
};

export const addTransaction = (transaction: ITransaction) => {
  const storedTransactions: ITransaction[] =
    getLocalStorageValue('transactions');

  setLocalStorageValue<ITransaction[]>('transactions', [
    ...storedTransactions,
    transaction,
  ]);

  return {
    type: TransactionTypes.ADD_TRANSACTION,
    payload: transaction,
  };
};

export const removeTransaction = (id: string) => {
  const storedTransactions: ITransaction[] =
    getLocalStorageValue('transactions');

  setLocalStorageValue<ITransaction[]>('transactions', [
    ...storedTransactions.filter((tsc) => tsc.id !== id),
  ]);

  return {
    type: TransactionTypes.REMOVE_TRANSACTION,
    payload: id,
  };
};
