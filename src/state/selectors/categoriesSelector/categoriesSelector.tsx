import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "state/store";

export const categoriesSelector = createSelector(
  (state: RootState) => state,
  (state) => state.categories
);
