import { ICategory } from "../../../interfaces";
import {} from "../types/state.types";
import { CategoryActionTypeConstants } from "./category.constants";

export interface ICategoryActionType {
  type: CategoryActionTypeConstants;
  payload: ICategory;
}
