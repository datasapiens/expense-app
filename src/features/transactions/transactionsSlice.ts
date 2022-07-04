import { Category, DEFAULT_CATEGORIES } from "../categories/categoriesSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_TRANSACTIONS = [
  {
    id: uuidv4(),
    label: "Hello",
    date: "2020-11-11",
    amount: 0,
    category: DEFAULT_CATEGORIES[0].id,
  },
  {
    id: uuidv4(),
    label: "Bye",
    date: "2021-10-10",
    amount: 10,
    category: DEFAULT_CATEGORIES[1].id,
  },
  {
    id: uuidv4(),
    label: "Bye",
    date: "2022-06-06",
    amount: -50,
    category: DEFAULT_CATEGORIES[2].id,
  },
];

export interface Transaction {
  id: string;
  label: string;
  date: string;
  amount: number;
  category: Category["id"];
}

export interface TranstactionsState {
  transactions: Transaction[];
}

const initialState: TranstactionsState = {
  transactions: DEFAULT_TRANSACTIONS,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push({ ...action.payload, id: uuidv4() });
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export const selectTransactions = (state: RootState) => state.transactions;

export default transactionsSlice.reducer;
