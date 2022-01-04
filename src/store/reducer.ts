import { defaultState } from "./state";
import { actionsTypes } from "./actions";
import { Actions, Category, State, Transaction } from "./types";
import { LocalStorageManager } from "../helpers/localStorageManager";

export const reducer = (state: State = defaultState, action: Actions) => {
  switch (action.type) {
    case actionsTypes.setCategory: {
      const newCategories = [...state.categories, action.payload];
      LocalStorageManager.setItem(
        "categories",
        newCategories as Array<Category>
      );
      return { ...state, categories: newCategories };
    }
    case actionsTypes.deleteCategory: {
      const newCategories = state.categories.filter(
        (item: Category) => item.id !== action.payload
      );
      LocalStorageManager.setItem("categories", newCategories);
      return {
        ...state,
        categories: newCategories,
      };
    }
    case actionsTypes.setTransaction: {
      const newTransactions = [...state.transactions, action.payload];
      LocalStorageManager.setItem(
        "transactions",
        newTransactions as Array<Transaction>
      );
      return {
        ...state,
        transactions: newTransactions,
      };
    }
    default:
      return state;
  }
};
