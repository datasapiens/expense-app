import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "interfaces/transaction.interface";
import { RootState } from "store";
import { TRANSACTIONS } from "utils/constants";

let db: ITransaction[] = [];

interface TransactionProp {
  transactions: ITransaction[];
  total: number;
}

if (!db.length) {
  const localDB = JSON.parse(localStorage.getItem(TRANSACTIONS) as string);
  if (localDB) db = localDB;
}

const initialState: TransactionProp = {
  transactions: db,
  get total() {
    const sum = this.transactions
      ?.map((t) => Number(t.amount))
      ?.reduce((a, b) => a + b);

    return sum;
  },
};

const transactionSlice = createSlice({
  name: "Transaction",
  initialState,
  reducers: {
    addTransaction: (state, { payload }: PayloadAction<ITransaction>) => {
      const data = {
        ...state,
        transactions: [...state.transactions, payload],
        total: state.transactions.reduce((total, num) => total + num.amount, 0),
      };
      localStorage.setItem(TRANSACTIONS, JSON.stringify(data.transactions));

      return data;
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export const transactionSeletor = (state: RootState) => state.transactions;
export default transactionSlice.reducer;
