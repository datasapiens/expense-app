import { configureStore } from '@reduxjs/toolkit';
import spyOn = jest.spyOn;
import categoriesReducer, { addCategory, CategoriesState, removeCategory } from './categoriesSlice';
import { CategoryModel } from '../../app/models/category.model';
import { fetchCategories } from './API/categories.service';
import { categories } from '../../app/categories.MOCK';

describe('transactions reducer', () => {
  const initialState: CategoriesState = {
    categoriesList: [
      {
        label: 'Some name',
        id: 3,
      },
    ],
    loading: false,
  };

  it('should handle initial state', () => {
    expect(categoriesReducer(undefined, { type: 'unknown' })).toEqual({
      categoriesList: categories,
      loading: false,
    });
  });

  it('should handle add new category', () => {
    const category: CategoryModel = {
      label: 'Name',
      id: 2,
    };
    const actual = categoriesReducer(initialState, addCategory(category));

    expect(actual.categoriesList[actual.categoriesList.length - 1]).toMatchObject({
      id: expect.any(Number),
      label: 'Name',
    });
  });

  it('should handle delete category', () => {
    const category: CategoryModel = {
      id: 1,
      label: 'Salary',
    };
    const actual = categoriesReducer(initialState, removeCategory(category));

    expect(actual.categoriesList.find(el => el.id === category.id)).toEqual(undefined);
  });

  it('should handle loading state on fetch categories', () => {
    const actual = categoriesReducer(initialState, fetchCategories.pending);
    expect(actual.loading).toEqual(true);
  });

  it('should handle success state on fetch categories', async () => {
    const localStorageData = [{ label: 'Name', id: 22 }];
    spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockImplementation(() => JSON.stringify(localStorageData));

    const store = configureStore({
      reducer: function (state = [], action) {
        switch (action.type) {
          case 'categories/fetchAll/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchCategories());

    expect(store.getState()).toEqual(localStorageData);
  });

  it('should handle error state on fetch categories', () => {
    const actual = categoriesReducer(initialState, fetchCategories.rejected);
    expect(actual.loading).toEqual(false);
  });
});
