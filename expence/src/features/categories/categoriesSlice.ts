import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CategoryModel } from '../../app/models/category.model';
import { categories } from '../../app/categories.MOCK';
import { setLocalStorage } from '../../app/utils/localStorage';
import { CATEGORIES_KEY } from './API/categories.service';

export interface CategoriesState {
  categoriesList: CategoryModel[];
  loading: boolean;
}

const initialState: CategoriesState = {
  categoriesList: categories,
  loading: false,
};

export const categoriesSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<CategoryModel>) => {
      const newCategory = { ...action.payload, id: Date.now() };
      state.categoriesList.push(newCategory);
      setLocalStorage(CATEGORIES_KEY, state.categoriesList);
    },
    removeCategory: (state, action: PayloadAction<CategoryModel>) => {
      state.categoriesList = state.categoriesList.filter(category => action.payload.id !== category.id);
      setLocalStorage(CATEGORIES_KEY, state.categoriesList);
    },
    categoriesFetching: state => {
      state.loading = true;
    },
    categoriesFetchingSuccess: (state, action: PayloadAction<CategoryModel[]>) => {
      state.loading = false;
      state.categoriesList = action.payload;
    },
    categoriesFetchingError: (state, action: PayloadAction<CategoryModel[]>) => {
      state.loading = false;
      console.warn(action.payload);
    },
  },
});

export const selectCategories = (state: RootState) => state.categories.categoriesList;

export const { addCategory, removeCategory, categoriesFetching, categoriesFetchingError, categoriesFetchingSuccess } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
