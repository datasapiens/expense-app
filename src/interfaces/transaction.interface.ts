import { ICategory } from "./category.interface";

export interface ITransaction {
  id: string;
  label: string;
  date: Date | string;
  amount: number;
  categoryId: string;
  category: ICategory;
}
