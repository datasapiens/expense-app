import * as types from "../constants/action-types";
import * as storageService from "../../services/storageService";
import { Categories } from "../../models";

// export const depositMoney = (amount: number) => {
//   return {
//     type: types.DEPOSIT,
//     payload: amount,
//   };
// };

// export const withdrawMoney = (amount: number) => {
//   return {
//     type: types.WITHDRAW,
//     payload: amount,
//   };
// };

// export const asyncCall = () => {
//   return (dispatch: any) => {
//     setTimeout(() => {
//       return dispatch(withdrawMoney(100));
//     }, 1000);
//   };
// };

export const requestCategories = () => {
  return (dispatch: any) => {
      let categories: Categories = storageService.getCategories();
      return dispatch(categoriesSuccess(categories));
  };
};

export const categoriesSuccess = (categories: Categories) => {
  return {
    type: types.CATEGORIES_SUCCESS,
    payload: categories.data
  };
};