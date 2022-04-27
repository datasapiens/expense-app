import { categoryStore } from '../categoryStore';

// We'll use this file to export all actions associated with the
// category slice of the store.
export const { addCategory, deleteCategory } = categoryStore.actions;
