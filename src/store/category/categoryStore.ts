import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Category } from 'types/Category';
import { addCategory, deleteCategory } from 'store/category/reducers';

// Creating a normalized schema for the category slice of our store.
// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
export type CategoryStateShape = {
  categories: {
    byId: {
      [id: Category['id']]: Category;
    };
    allIds: Category['id'][];
  };
};

const initialState: CategoryStateShape = {
  categories: {
    byId: {
      salary: {
        id: 'salary',
        label: 'Salary',
      },
      gifts: {
        id: 'gifts',
        label: 'Gifts',
      },
      food: {
        id: 'food',
        label: 'Food',
      },
      'going-out': {
        id: 'going-out',
        label: 'Going Out',
      },
      traveling: {
        id: 'traveling',
        label: 'Traveling',
      },
    },
    allIds: ['salary', 'gifts', 'food', 'going-out', 'traveling'],
  },
};

const localStorageTransactions = localStorage.getItem('categories');
let savedTransactions: CategoryStateShape;

if (localStorageTransactions) {
  savedTransactions = JSON.parse(localStorageTransactions);

  initialState.categories = savedTransactions.categories;
}

export const categoryStore = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) =>
      addCategory(state, action),
    deleteCategory: (state, action: PayloadAction<Category>) =>
      deleteCategory(state, action),
  },
});

export const categoryReducer = categoryStore.reducer;
