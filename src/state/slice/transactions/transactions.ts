import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Transaction } from "entities/Transaction";

export type State = Transaction[];

const initialState: State = [];

export const Transactions = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    add: {
      reducer: (state, { payload }: PayloadAction<Transaction>) => {
        state.push(payload);
      },
      prepare: (props: Omit<Transaction, "id">) => ({
        payload: {
          id: uuidv4(),
          ...props,
        },
      }),
    },
  },
});
