import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Category from '../../types/category';
import DEFAULT_CATEGORIES from '../../data/categories';

export interface CategoriesState {
  categories: Category[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CategoriesState = {
  categories: DEFAULT_CATEGORIES,
  status: 'idle',
};

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    initializeCategoriesStore: (state, action: PayloadAction<CategoriesState>) => {
      state.categories = action.payload.categories
      state.status = action.payload.status
    },
    addNewCategory: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories.concat(action.payload);
    },
    removeCategory: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories.filter(singleCategory => action.payload.id !== singleCategory.id)
    }
  },
});

export const { addNewCategory, initializeCategoriesStore, removeCategory } = categories.actions;

export default categories.reducer;
