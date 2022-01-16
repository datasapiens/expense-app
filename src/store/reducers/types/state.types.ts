import { ICategory, ITransaction } from "../../../interfaces";

export interface IState {
  categories: Array<ICategory>;
  transactions: Array<ITransaction>;
}
