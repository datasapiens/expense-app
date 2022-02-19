import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { TransactionsInitialState } from './types';

const initialState: TransactionsInitialState = {
  data: [],
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

const stateTransactions = (state: RootState): TransactionsInitialState =>
  state.transactions;

export const transactionSelector = createDraftSafeSelector(
  stateTransactions,
  (state) => {
    return state;
  }
);

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
