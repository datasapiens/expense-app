import {
  ADD_EXPENSE,
  GET_EXPENSE,
  REMOVE_EXPENSE,
  SEARCH_EXPENSE,
} from "../types/expenses";

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: REMOVE_EXPENSE,
    data,
  };
};

export const getExpense = () => {
  return {
    type: GET_EXPENSE,
  };
};

export const searchExpense = (query) => {
  return {
    type: SEARCH_EXPENSE,
    query,
  };
};
