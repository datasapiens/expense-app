import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface CategoriesState {
  categories: [];
  status: string;
}

const initialState: CategoriesState = {
  categories:[],
  status: 'idle',
};

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
});

export const {} = categories.actions;

export default categories.reducer;
