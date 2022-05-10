import { initialCategories } from "../config";
import { Categories, Category, Transaction, Transactions } from "../models";

export const seedCategories = () => {
  const REACT_APP_CATEGORIES_TABLE_NAME: string = process.env
    .REACT_APP_CATEGORIES_TABLE_NAME as string;

  if (!localStorage.getItem(REACT_APP_CATEGORIES_TABLE_NAME)) {
    localStorage.setItem(
      REACT_APP_CATEGORIES_TABLE_NAME,
      JSON.stringify({
        data: initialCategories,
        finalId: [initialCategories[initialCategories.length - 1].id],
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
        finalId: 0,
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

export const addCategory = (category: any) => {
  const REACT_APP_CATEGORIES_TABLE_NAME: string = process.env
    .REACT_APP_CATEGORIES_TABLE_NAME as string;
  const categoriesObj: Categories = JSON.parse(
    localStorage.getItem(REACT_APP_CATEGORIES_TABLE_NAME) as string
  );
  const newCategory: Category = {
    id: +categoriesObj.finalId + 1,
    ...category,
    deleteDate: null
  };
  categoriesObj.finalId++;
  categoriesObj.data.push(newCategory);
  localStorage.setItem(
    REACT_APP_CATEGORIES_TABLE_NAME,
    JSON.stringify(categoriesObj)
  );
  return categoriesObj;
};

export const addTransaction = (transaction: any) => {
  const REACT_APP_TRANSACTIONS_TABLE_NAME: string = process.env
    .REACT_APP_TRANSACTIONS_TABLE_NAME as string;
  const transactionsObj: Transactions = JSON.parse(
    localStorage.getItem(REACT_APP_TRANSACTIONS_TABLE_NAME) as string
  );
  const newTransaction: Transaction = {
    id: +transactionsObj.finalId + 1,
    ...transaction,
    amount: +transaction.amount,
    category: +transaction.category,
    date: Date.now(),
  };

  console.log(transaction, newTransaction)
  transactionsObj.finalId++;
  transactionsObj.data.push(newTransaction);
  localStorage.setItem(
    REACT_APP_TRANSACTIONS_TABLE_NAME,
    JSON.stringify(transactionsObj)
  );
  return transactionsObj;
};

export const deleteCategory = (category: any) => {
  const REACT_APP_CATEGORIES_TABLE_NAME: string = process.env
    .REACT_APP_CATEGORIES_TABLE_NAME as string;
  const categoriesObj: Categories = JSON.parse(
    localStorage.getItem(REACT_APP_CATEGORIES_TABLE_NAME) as string
  );
  let elem =  categoriesObj.data.find((elem) => {
    return elem.id === category.id; 
  });
  if(elem) {
    elem.deleteDate = Date.now();
  }
  localStorage.setItem(
    REACT_APP_CATEGORIES_TABLE_NAME,
    JSON.stringify(categoriesObj)
  );
  return categoriesObj;
};
