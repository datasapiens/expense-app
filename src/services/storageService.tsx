import { initialCategories } from "../config";

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

export const getCategories = () => {
  const REACT_APP_CATEGORIES_TABLE_NAME: string = process.env
    .REACT_APP_CATEGORIES_TABLE_NAME as string;
  return JSON.parse(
    localStorage.getItem(REACT_APP_CATEGORIES_TABLE_NAME) as string
  );
};
