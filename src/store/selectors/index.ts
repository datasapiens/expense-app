import { RootState } from 'store/type';

// Category selectors
export const selectCategory = (state: RootState) =>
  state.entities.categories.categories;

// Transaction selectors
export const selectTransaction = (state: RootState) =>
  state.entities.transactions;
