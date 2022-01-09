import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TransactionModel } from '../../app/models/transaction.model';
import { TRANSACTIONS_KEY } from './API/transactions.service';

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
    transactionsFetching: state => {
      state.loading = true;
    },
    transactionsFetchingSuccess: (state, action: PayloadAction<TransactionModel[]>) => {
      state.loading = false;
      state.transactionsList = action.payload;
    },
    transactionsFetchingError: (state, action: PayloadAction<TransactionModel[]>) => {
      state.loading = false;
      console.warn(action.payload);
    },
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
});

export const selectTransactions = (state: RootState) => state.transactions.transactionsList;
export const selectTransactionsLoading = (state: RootState) => state.transactions.loading;

export const { addTransaction, transactionsFetching, transactionsFetchingSuccess, transactionsFetchingError } = transactionsSlice.actions;

export default transactionsSlice.reducer;
