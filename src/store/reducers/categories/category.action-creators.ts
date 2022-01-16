import { ICategory } from "../../../interfaces";
import { Dispatch } from "redux";
import { ICategoryActionType } from "./category.action-types";
import { CategoryActionTypeConstants } from "./category.constants";

export const addCategory = (category: ICategory) => {
  return (dispatch: Dispatch<ICategoryActionType>) => {
    dispatch({
      type: CategoryActionTypeConstants.ADD_CATEORY,
      payload: category,
    });
  };
};

export const deleteCategory = (category: ICategory) => {
  return (dispatch: Dispatch<ICategoryActionType>) => {
    dispatch({
      type: CategoryActionTypeConstants.DELETE_CATEGORY,
      payload: category,
    });
  };
};
