import { IAction, ICategoriesState } from "../models";

const INITIAL_STATE: ICategoriesState = {
  categories: [],
  showCategoryAddedSuccessAlert: false,
};

const categoriesReducer = (
  state: ICategoriesState = INITIAL_STATE,
  action: IAction
) => {
  switch (action.type) {
    case "CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload,
      };
    case "ADD_CATEGORY_SUCCESS":
      return {
        ...state,
        showCategoryAddedSuccessAlert: true,
        categories: action.payload,
      };
    case "RESET_CATEGORY_ADD_ALERT":
      return {
        ...state,
        showCategoryAddedSuccessAlert: false,
      };
    case "DELETE_CATEGORY_SUCCESS":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
