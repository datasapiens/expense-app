import { ExpenseType, ICategory } from "../../interfaces";
import { getInitialLocalCategories } from "../helpers";
import { IState } from "./types/state.types";

export const defaultState: IState = {
  categories: getInitialLocalCategories() as Array<ICategory>,
};
