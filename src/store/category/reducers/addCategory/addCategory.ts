import { PayloadAction, Draft } from '@reduxjs/toolkit';
import type { CategoryStateShape } from 'store/category/categoryStore';
import { Category } from 'types/Category';

export const addCategory = (
  state: Draft<CategoryStateShape>,
  action: PayloadAction<Category>,
) => {
  const { payload: category } = action;

  state.categories.byId[category.id] = category;
  state.categories.allIds.push(category.id);
};
