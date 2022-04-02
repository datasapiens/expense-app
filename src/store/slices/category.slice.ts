import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "interfaces/category.interface";
import { RootState } from "store";
import { CATEGORIES } from "utils/constants";
import { uid } from "utils/helpers";

const initialCategories: ICategory[] = [
  { label: "Salary", id: uid() },
  { label: "Gifts", id: uid() },
  { label: "Food", id: uid() },
  { label: "Going out", id: uid() },
  { label: "Traveling", id: uid() },
];

const db: ICategory[] = JSON.parse(localStorage.getItem(CATEGORIES) as string);

if (!db) {
  localStorage.setItem(CATEGORIES, JSON.stringify(initialCategories));
}

const initialState: ICategory[] = db;

export const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    addCategory: (state, { payload }: PayloadAction<ICategory>) => {
      state.push(payload);
      localStorage.setItem(CATEGORIES, JSON.stringify(state));
    },
    updateCategory: (state, { payload }: PayloadAction<ICategory>) => {
      state?.map((category) =>
        category.id === payload.id ? { ...category, ...payload } : category
      );
    },
    removeCategory: (state, { payload }: PayloadAction<string>) => {
      const data = state.filter((s) => s.id !== payload);
      localStorage.setItem(CATEGORIES, JSON.stringify(data));
      state = data;
    },
  },
});

export const { addCategory, updateCategory, removeCategory } =
  categorySlice.actions;
export const categorySelector = (state: RootState) => state.categories;

export default categorySlice.reducer;
