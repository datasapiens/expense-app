import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ICategory, ITransaction } from './types';

export const initialState: ContainerState = {
  isLoading: false,
  error: false,
  categories: [
    {
      id: '1',
      label: 'Food',
    },
    {
      id: '2',
      label: 'Transport',
    },
    {
      id: '3',
      label: 'Clothes',
    },
    {
      id: '4',
      label: 'Entertainment',
    },
    {
      id: '5',
      label: 'Other',
    },
  ],
  transactions: [],
  totalExpenses: 0,
  totalIncome: 0,
  isAddTransactionModalOpen: false,
  isAddCategoryModalOpen: false,
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
    createCategory: (state, action: PayloadAction<ICategory>) => {
      state.isLoading = true;
      state.error = false;
      state.categories.push(action.payload);
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      const foundIndex = state.transactions.findIndex(
        x => x.category === action.payload,
      );
      state.isLoading = true;
      state.error = false;
      state.categories = state.categories.filter(
        category => category.id !== action.payload,
      );
      state.transactions[foundIndex].category = 'uncatogrized';
    },
    addTransactionModal: state => {
      state.isAddTransactionModalOpen = true;
    },
    addCategoryModal: state => {
      state.isAddCategoryModalOpen = true;
    },
    resetModalContent: state => {
      state.isAddCategoryModalOpen = false;
      state.isAddTransactionModalOpen = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homPageSlice;
