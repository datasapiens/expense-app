import { Category } from "../categories/categoriesSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { v4 as uuidv4 } from "uuid";

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
  transactions: [],
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
