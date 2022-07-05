import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { v4 as uuidv4 } from "uuid";

export const DEFAULT_CATEGORIES = [
  {
    id: uuidv4(),
    label: "Salary",
  },
  {
    id: uuidv4(),
    label: "Gifts",
  },
  {
    id: uuidv4(),
    label: "Food",
  },
  {
    id: uuidv4(),
    label: "Going out",
  },
  {
    id: uuidv4(),
    label: "Traveling",
  },
];

export interface Category {
  id: string;
  label: string;
}

export interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: DEFAULT_CATEGORIES,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.categories.push({ label: action.payload, id: uuidv4() });
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addCategory, removeCategory } = categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
