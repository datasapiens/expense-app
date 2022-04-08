import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ITransaction } from './types';

export const initialState: ContainerState = {
  isLoading: false,
  error: false,
  categories: [
    {
      id: '1',
      value: 'Food',
    },
    {
      id: '2',
      value: 'Transport',
    },
    {
      id: '3',
      value: 'Clothes',
    },
    {
      id: '4',
      value: 'Entertainment',
    },
    {
      id: '5',
      value: 'Other',
    },
  ],
  transactions: [],
  totalExpenses: 0,
  totalIncome: 0,
};

const homPageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    createTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.isLoading = true;
      state.error = false;
      state.transactions.push(action.payload);
    },
    createTransactionSuccess: (state, action: PayloadAction<ITransaction>) => {
      state.isLoading = false;
    },
    createTransactionError: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homPageSlice;
