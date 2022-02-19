import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { CategoriesInitialState } from './types';

const initialState: CategoriesInitialState = {
  data: [
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
  ],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.data.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.data = state.data.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

const stateCategories = (state: RootState): CategoriesInitialState =>
  state.categories;

export const categoriesSelector = createDraftSafeSelector(
  stateCategories,
  (state) => {
    return state;
  }
);

export const { addCategory, removeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
