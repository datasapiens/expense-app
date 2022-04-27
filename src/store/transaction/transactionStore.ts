import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Transaction } from 'types/Transaction';
import { addTransaction } from 'store/transaction/reducers/addTransaction';

// Creating a normalized schema for the category slice of our store.
// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
export type TransactionStoreShape = {
  transactions: {
    byId: {
      [id: Transaction['id']]: Transaction;
    };
    allIds: Transaction['id'][];
  };
};
const initialState: TransactionStoreShape = {
  transactions: { allIds: [], byId: {} },
};

const localStorageTransactions = localStorage.getItem('transactions');
let savedTransactions: TransactionStoreShape;

if (localStorageTransactions) {
  savedTransactions = JSON.parse(localStorageTransactions);

  initialState.transactions = savedTransactions.transactions;
}

export const TransactionStoreShape = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) =>
      addTransaction(state, action),
  },
});

export const transactionReducer = TransactionStoreShape.reducer;
