import { PayloadAction, Draft } from '@reduxjs/toolkit';
import type { CategoryStateShape } from 'store/category/categoryStore';
import { Category } from 'types/Category';

export const deleteCategory = (
  state: Draft<CategoryStateShape>,
  action: PayloadAction<Category>,
) => {
  const categoryId = state.categories.allIds.indexOf(action.payload.id);

  state.categories.allIds.splice(categoryId, 1);
};
