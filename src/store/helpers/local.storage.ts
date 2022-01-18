import { ICategory, ITransaction } from "../../interfaces";
import { storeConstants } from "./store.constants";
import { initialCategories } from "./categories.mock.data";

export const getInitialLocalCategories = (): Array<ICategory> => {
  storeInitialCategories();
  return JSON.parse(window.localStorage.getItem(storeConstants.CATEGORIES) as string);
};

export const storeCurrentCategoriesToLocalStorage = (categories: Array<ICategory>): void => {
  window.localStorage.setItem(storeConstants.CATEGORIES, JSON.stringify(categories));
};

export const getInitialLocalTransactions = (): Array<ICategory> => {
  return JSON.parse(window.localStorage.getItem(storeConstants.TRANSACTIONS) as string);
};

export const storeTransactionsToLocalStorage = (transactions: Array<ITransaction>): void => {
  window.localStorage.setItem(storeConstants.TRANSACTIONS, JSON.stringify(transactions));
};

export const getTransactionsFromLocalStorage = (): Array<ITransaction> => {
  return JSON.parse(window.localStorage.getItem(storeConstants.TRANSACTIONS) as string);
};

const storeInitialCategories = (): void => {
  const localCategories: Array<ICategory> = JSON.parse(
    window.localStorage.getItem(storeConstants.CATEGORIES) as string
  );
  if (localCategories.length === 0) {
    window.localStorage.setItem(storeConstants.CATEGORIES, JSON.stringify(initialCategories));
  }
};
