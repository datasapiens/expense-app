import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HexBase64BinaryEncoding } from 'crypto';
import { RootState, AppThunk } from '../app/store';
import { useDispatch } from 'react-redux';

const initialState: { transactions: Array<any>; categories: Array<any> } = {
  transactions: [],
  categories: [],
};

export const initialCategories = () => {
  const storage = localStorage.getItem('categories');
  let categories = [];

  if (storage) {
    categories = JSON.parse(storage);
  }

  if (categories.length === 0) {
    let initialLabels = ['Other', 'Payroll', 'Overhead', 'Transportation'];
    categories = initialLabels.map((category, i) => ({
      label: category,
      id: i,
    }));

    localStorage.setItem('categories', JSON.stringify(categories));
    getCategories();
  }
};

export const getTransactions = () => {
  const storage = localStorage.getItem('transactions');

  if (storage) {
    const transactions = JSON.parse(storage);
    addTransactionReducer(transactions);
    return transactions;
  }
};

export const getCategories = () => {
  const storage = localStorage.getItem('categories');
  if (storage) {
    const categories = JSON.parse(storage);
    addCategoryReducer(categories);
    return categories;
  }
};

export const addTransaction = (payload: any) => {
  const storage = localStorage.getItem('transactions');
  let transactions = [];

  if (storage) {
    transactions = JSON.parse(storage);
  }

  const record = { ...payload };
  transactions.push(record);

  localStorage.setItem('transactions', JSON.stringify(transactions));

  addTransactionReducer(transactions);
};

export const addCategory = (label: string) => {
  const storage = localStorage.getItem('categories');
  let categories = [];

  if (storage) {
    categories = JSON.parse(storage);
  }

  categories.push({ id: label, label });

  localStorage.setItem('categories', JSON.stringify(categories));

  addCategoryReducer(categories);
};

export const deleteCategory = (payload: any) => {
  const storage = localStorage.getItem('categories');
  let categories = [];

  if (storage) {
    categories = JSON.parse(storage);
  }

  categories = categories.filter((category: any) => category.label !== payload);

  localStorage.setItem('categories', JSON.stringify(categories));
};

export const transactionReducer = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransactionReducer: (state, action: any) => {
      state.transactions.push(action.payload);
    },
    addCategoryReducer: (state, action: any) => {
      state.categories.push(action.payload);
    },
  },
});
export const appState = (state: RootState) => state;
export const { addTransactionReducer, addCategoryReducer } =
  transactionReducer.actions;

export default transactionReducer.reducer;
