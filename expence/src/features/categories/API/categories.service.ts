import { AppDispatch } from '../../../app/store';
import { getLocalStorage } from '../../../app/utils/localStorage';
import { categoriesSlice } from '../categoriesSlice';

export const CATEGORIES_KEY = 'categories';

export const fetchCategoriesService = async (dispatch: AppDispatch) => {
  try {
    dispatch(categoriesSlice.actions.categoriesFetching());
    await new Promise(resolve => setTimeout(resolve, 1500));
    const response = getLocalStorage(CATEGORIES_KEY);
    const parsed = JSON.parse(response || '');
    dispatch(categoriesSlice.actions.categoriesFetchingSuccess(parsed));
  } catch (error) {
    dispatch(categoriesSlice.actions.categoriesFetchingError(error.message));
  }
};
