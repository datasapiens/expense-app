import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "state/store";

export const transactionsSelector = createSelector(
  (state: RootState) => state,
  (state) => state.transactions
);
