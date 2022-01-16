import { ICategory } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";

export const initialCategories: Array<ICategory> = [
  { id: uuidv4(), label: "Groceries" },
  { id: uuidv4(), label: "Home" },
  { id: uuidv4(), label: "Office" },
];
