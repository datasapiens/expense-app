import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

export const initialState: ContainerState = {
  isLoading: false,
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
};

const homPageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homPageSlice;
