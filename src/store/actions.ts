import { Category, Transaction } from "./types";

export const actionsTypes = {
  setCategory: "SET_CATEGORY",
  deleteCategory: "DELETE_CATEGORY",
  setTransaction: "SET_TRANSACTION",
};

export const setCategoryAction = (payload: Category) => ({
  type: actionsTypes.setCategory,
  payload,
});

export const deleteCategoryAction = (payload: string) => ({
  type: actionsTypes.deleteCategory,
  payload,
});

export const setTransactionAction = (payload: Transaction) => ({
  type: actionsTypes.setTransaction,
  payload,
});
