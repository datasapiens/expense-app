import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import { updateItems } from "../items/itemsSlice";

export interface Category {
  id: string;
  label: string;
}

const initialState = [
  {
    id: '1',
    label: "Salary",
  },
  {
    id: '2',
    label: "Savings",
  },
  {
    id: '3',
    label: "Food",
  },
  {
    id: '4',
    label: "Fuel",
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState as Category[],
  reducers: {
    addCategory: {
      reducer: (state, action: PayloadAction<Category>) => {
        state.push(action.payload);
      },
      prepare: (label: string) => {
        const id = nanoid();
        return { payload: { id, label } };
      },
    },

    removeCategory(state, action: PayloadAction<string>) {
      const index = state.findIndex(
        (category) => category.id === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const removeCategoryThunk =
  (id: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(removeCategory(id));
    dispatch(updateItems(id));
  };

export const { addCategory, removeCategory } = categoriesSlice.actions;
export const Categories = (state: RootState) => state.categories;
export default categoriesSlice.reducer;
