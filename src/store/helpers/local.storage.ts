import { ICategory } from "../../interfaces";
import { storeConstants } from "./store.constants";
import { initialCategories } from "./categories.mock.data";

export const getInitialLocalCategories = (): Array<ICategory> | [] => {
  storeInitialCategories();
  return JSON.parse(window.localStorage.getItem(storeConstants.CATEGORIES) as string) || [];
};

export const storeCurrentCategoriesToLocalStorage = (categories: Array<ICategory>): void => {
  window.localStorage.setItem(storeConstants.CATEGORIES, JSON.stringify(categories));
};

const storeInitialCategories = (): void => {
  const localCategories: Array<ICategory> =
    JSON.parse(window.localStorage.getItem(storeConstants.CATEGORIES) as string) || [];
  if (localCategories.length === 0) {
    window.localStorage.setItem(storeConstants.CATEGORIES, JSON.stringify(initialCategories));
  }
};
