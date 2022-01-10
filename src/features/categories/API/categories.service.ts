import { getLocalStorage } from '../../../app/utils/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const CATEGORIES_KEY = 'categories';

export const fetchCategories = createAsyncThunk('categories/fetchAll', async () => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  const response = getLocalStorage(CATEGORIES_KEY);
  return JSON.parse(response || '');
});
