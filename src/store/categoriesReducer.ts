import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../types';
import type { RootState } from './index';

type CategoriesState = Category[];

const initialState: CategoriesState = [
  {
    id: 0,
    label: 'Other',
  },
  {
    id: 1,
    label: 'Salary',
  },
  {
    id: 2,
    label: 'Gifts',
  },
  {
    id: 3,
    label: 'Food',
  },
  {
    id: 4,
    label: 'Going out',
  },
  {
    id: 5,
    label: 'Traveling',
  },
];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    removeCategory: (state, action) => {
      return state.filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategory, removeCategory } = categoriesSlice.actions;

export const selectCount = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
