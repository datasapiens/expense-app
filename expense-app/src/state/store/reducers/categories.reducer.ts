import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_CATEGORIES } from "../../../data/data";
import { Category } from "../../../interfaces/category.interface";

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
    }
})

export const { initializeCategoriesStore } = categories.actions;
export default categories.reducer;