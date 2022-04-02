import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "interfaces/transaction.interface";
import { RootState } from "store";
import { TRANSACTIONS } from "utils/constants";

let db: ITransaction[] = [];

if (!db.length) {
  const localDB = JSON.parse(localStorage.getItem(TRANSACTIONS) as string);
  if (localDB) db = localDB;
}

const initialState: ITransaction[] = db;

const transactionSlice = createSlice({
  name: "Transaction",
  initialState,
  reducers: {
    addTransaction: (state, { payload }: PayloadAction<ITransaction>) => {
      const data = [...state, payload];
      localStorage.setItem(TRANSACTIONS, JSON.stringify(data));
      return (state = [...state, payload]);
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export const transactionSeletor = (state: RootState) => state.transactions;
export default transactionSlice.reducer;
