import {
  ADD_CATEGORY,
  GET_CATEGORY,
  REMOVE_CATEGORY,
} from "../types/categories";

export const addCategory = (data) => {
  console.log(data);
  return {
    type: ADD_CATEGORY,
    data,
  };
};

export const deleteCategory = (data) => {
  return {
    type: REMOVE_CATEGORY,
    data,
  };
};

export const getCategory = () => {
  return {
    type: GET_CATEGORY,
  };
};
