import { RootState } from '../../app/store';

export const selectCategories = (state: RootState) => state.categories.categories;