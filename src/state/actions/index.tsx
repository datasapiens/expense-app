import * as types from "../constants/action-types";
import * as storageService from "../../services/storageService";
import { Categories, Transactions } from "../../models";

export const requestCategories = () => {
  return (dispatch: any) => {
    let categories: Categories = storageService.getCategories();
    return dispatch(categoriesSuccess(categories));
  };
};

export const categoriesSuccess = (categories: Categories) => {
  return {
    type: types.CATEGORIES_SUCCESS,
    payload: categories.data,
  };
};

export const requestTransactions = () => {
  return (dispatch: any) => {
    let transactions: Transactions = storageService.getTransactions();
    return dispatch(transactionsSuccess(transactions));
  };
};

export const transactionsSuccess = (transactions: Transactions) => {
  return {
    type: types.TRANSACTIONS_SUCCESS,
    payload: transactions.data,
  };
};

export const requestAddTransaction = (data: any) => {
  return (dispatch: any) => {
    const transactions: Transactions = storageService.addTransaction(data);
    return dispatch(addTransactionSuccess(transactions));
  };
};

export const addTransactionSuccess = (transactions: Transactions) => {
  return {
    type: types.ADD_TRANSACTION_SUCCESS,
    payload: transactions.data,
  };
};

export const requestAddCategory = (data: any) => {
  return (dispatch: any) => {
    const categories: Categories = storageService.addCategory(data);
    return dispatch(addCategorySuccess(categories));
  };
};

export const addCategorySuccess = (categories: Categories) => {
  return {
    type: types.ADD_CATEGORY_SUCCESS,
    payload: categories.data,
  };
};

export const requestDeleteCategory = (data: any) => {
  return (dispatch: any) => {
    const categories: Categories = storageService.deleteCategory(data);
    return dispatch(deleteCategorySuccess(categories));
  };
};

export const deleteCategorySuccess = (categories: Categories) => {
  return {
    type: types.DELETE_CATEGORY_SUCCESS,
    payload: categories.data,
  };
};
