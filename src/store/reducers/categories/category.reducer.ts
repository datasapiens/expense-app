import { ICategory, ITransaction } from "../../../interfaces";
import {
  getTransactionsFromLocalStorage,
  storeCurrentCategoriesToLocalStorage,
  storeTransactionsToLocalStorage,
} from "../../helpers";
import { storeConstants } from "../../helpers/store.constants";
import { ICategoryActionType } from "./category.action-types";
import { IState } from "../types/state.types";
import { CategoryActionTypeConstants } from "./category.constants";

const categoryReducer = (state: IState[storeConstants.CATEGORIES] = [], action: ICategoryActionType) => {
  switch (action.type) {
    case CategoryActionTypeConstants.ADD_CATEORY: {
      const newCategories = [...state, action.payload];
      storeCurrentCategoriesToLocalStorage(newCategories);
      return newCategories;
    }
    case CategoryActionTypeConstants.DELETE_CATEGORY: {
      const newCategories = state.filter((item: ICategory) => item.id !== action.payload.id);

      storeCurrentCategoriesToLocalStorage(newCategories);
      return newCategories;
    }
    default:
      return state;
  }
};

export const getCategories = (state: IState) => state[storeConstants.CATEGORIES];

export default categoryReducer;
