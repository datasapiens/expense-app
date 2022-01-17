import { ExpenseType, ICategory, ITransaction } from "../../interfaces";
import { getInitialLocalCategories, getInitialLocalTransactions } from "../helpers";
import { IState } from "./types/state.types";

export const defaultState: IState = {
  categories: getInitialLocalCategories() as Array<ICategory>,
  transactions: getInitialLocalTransactions() as Array<ITransaction>,
};
