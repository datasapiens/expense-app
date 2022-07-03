import { categoriesAdapter } from './transactions.slice';
import { RootState } from '../store';

export const { selectAll: selectAllCategories } =
  categoriesAdapter.getSelectors(
    (state: RootState) => state.transactions.categories
  );

export const selectDefaultCategoryId = (state: RootState) =>
  state.transactions.categories.defaultCategoryId;
