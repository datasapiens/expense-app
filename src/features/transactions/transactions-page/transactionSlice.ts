import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { TransactionModel } from '../../../app/models/transaction.model';
import { fetchTransactions, TRANSACTIONS_KEY } from './API/transactions.service';

export interface TransactionState {
  transactionsList: TransactionModel[];
  loading: boolean;
}

const initialState: TransactionState = {
  transactionsList: [],
  loading: false,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionModel>) => {
      const date = new Date();
      const newTransaction: TransactionModel = {
        ...action.payload,
        id: Date.now(),
        date: `${date.getDate()} ${date.toLocaleString('default', {
          month: 'long',
        })} ${date.getFullYear()}`,
      };
      state.transactionsList = [...state.transactionsList, newTransaction];
      window.localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(state.transactionsList));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTransactions.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        console.warn(action.payload);
      })
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<TransactionModel[]>) => {
        state.loading = false;
        state.transactionsList = action.payload;
      });
  },
});

export const selectTransactions = (state: RootState) => state.transactions.transactionsList;
export const selectTransactionsLoading = (state: RootState) => state.transactions.loading;

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
