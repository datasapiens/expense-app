import { AppDispatch } from '../../../app/store';
import { getLocalStorage } from '../../../app/utils/localStorage';
import { categoriesSlice } from '../categoriesSlice';

export const CATEGORIES_KEY = 'categories';

export const fetchCategoriesService = (dispatch: AppDispatch) => {
  try {
    dispatch(categoriesSlice.actions.categoriesFetching);
    const response = getLocalStorage(CATEGORIES_KEY);
    const parsed = JSON.parse(response || '');
    dispatch(categoriesSlice.actions.categoriesFetchingSuccess(parsed));
  } catch (error) {
    dispatch(categoriesSlice.actions.categoriesFetchingError(error.message));
  }
};
