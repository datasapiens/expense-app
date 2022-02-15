import { initialCategories } from "../config";
import { Transaction, Transactions } from "../models";

export const seedCategories = () => {
  const REACT_APP_CATEGORIES_TABLE_NAME: string = process.env
    .REACT_APP_CATEGORIES_TABLE_NAME as string;

  if (!localStorage.getItem(REACT_APP_CATEGORIES_TABLE_NAME)) {
    localStorage.setItem(
      REACT_APP_CATEGORIES_TABLE_NAME,
      JSON.stringify({
        data: initialCategories,
      })
    );
  }
};

export const seedTransactions = () => {
  const REACT_APP_TRANSACTIONS_TABLE_NAME: string = process.env
    .REACT_APP_TRANSACTIONS_TABLE_NAME as string;

  if (!localStorage.getItem(REACT_APP_TRANSACTIONS_TABLE_NAME)) {
    localStorage.setItem(
      REACT_APP_TRANSACTIONS_TABLE_NAME,
      JSON.stringify({
        data: [],
      })
    );
  }
};

export const getCategories = () => {
  const REACT_APP_CATEGORIES_TABLE_NAME: string = process.env
    .REACT_APP_CATEGORIES_TABLE_NAME as string;
  return JSON.parse(
    localStorage.getItem(REACT_APP_CATEGORIES_TABLE_NAME) as string
  );
};

export const getTransactions = () => {
  const REACT_APP_TRANSACTIONS_TABLE_NAME: string = process.env
    .REACT_APP_TRANSACTIONS_TABLE_NAME as string;
  return JSON.parse(
    localStorage.getItem(REACT_APP_TRANSACTIONS_TABLE_NAME) as string
  );
};

export const addTransaction = (transaction: any) => {
  const REACT_APP_TRANSACTIONS_TABLE_NAME: string = process.env
    .REACT_APP_TRANSACTIONS_TABLE_NAME as string;
  const transactionsObj: Transactions = JSON.parse(
    localStorage.getItem(REACT_APP_TRANSACTIONS_TABLE_NAME) as string
  );
  const newTransaction: Transaction = {
    ...transaction,
    date: Date.now(),
    id: 122,
  };
  transactionsObj.data.push(newTransaction);
  localStorage.setItem(
    REACT_APP_TRANSACTIONS_TABLE_NAME,
    JSON.stringify(transactionsObj)
  );
  return transactionsObj;
};
