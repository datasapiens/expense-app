import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Category } from "../categories/categoriesSlice";

interface Item {
  id: string;
  label: string;
  date: string;
  amount: string;
  category: Category | undefined;
}

const initialState = [
  {
    id: nanoid(),
    label: "PPF Salary",
    date: "03/25/2022",
    amount: "50000",
    category: { id: "1", label: "Salery" },
  },
  {
    id: nanoid(),
    label: "Allan grey investment account",
    date: "03/26/2022",
    amount: "-5000",
    category: { id: "2", label: "Savings" },
  },
  {
    id: nanoid(),
    label: "Monthly groceries",
    date: "03/30/2022",
    amount: "-3500",
    category: { id: "3", label: "Food" },
  },
  {
    id: nanoid(),
    label: "Dinner date night",
    date: "04/02/2022",
    amount: "-350",
    category: { id: "3", label: "Food" },
  },
  {
    id: nanoid(),
    label: "Fill up landy",
    date: "04/04/2022",
    amount: "-2010.98",
    category: { id: "4", label: "Fuel" },
  },
];
const itemsSlice = createSlice({
  name: "items",
  initialState: initialState as Item[],
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.push(action.payload);
      },
      prepare: (
        label: string,
        date: string,
        amount: string,
        category: Category
      ) => {
        const id = nanoid();
        return { payload: { id, label, date, amount, category } };
      },
    },
    updateItems(state, action: PayloadAction<string>) {
      state.map((item) =>
        item.category?.id === action.payload
          ? (item.category = undefined)
          : item
      );
    },
  },
});

export const { addItem, updateItems } = itemsSlice.actions;
export const Items = (state: RootState) => state.items;
export default itemsSlice.reducer;
