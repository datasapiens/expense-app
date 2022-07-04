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
  items: Category[];
  status: "idle" | "loading" | "failed";
}

const initialState: CategoriesState = {
  items: DEFAULT_CATEGORIES,
  status: "idle",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.items.push({ label: action.payload, id: uuidv4() });
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { add, remove } = categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
