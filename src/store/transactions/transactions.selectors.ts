import { categoriesAdapter, transactionsAdapter } from './transactions.slice';
import { RootState } from '../store';

export const {
  selectAll: selectAllCategories,
  selectEntities: selectCategoriesDictionary
} = categoriesAdapter.getSelectors(
  (state: RootState) => state.transactions.categories
);

export const { selectAll: selectAllTransactions } =
  transactionsAdapter.getSelectors((state: RootState) => state.transactions);

export const selectDefaultCategoryId = (state: RootState) =>
  state.transactions.categories.defaultCategoryId;
