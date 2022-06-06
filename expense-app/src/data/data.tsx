import { v4 as uuid } from "uuid";

export const DEFAULT_CATEGORIES = [
  {
    id: uuid(),
    label: "Traveling",
  },
  {
    id: uuid(),
    label: "Salary",
  },
  {
    id: uuid(),
    label: "Gifts",
  },
  {
    id: uuid(),
    label: "Food",
  },
  {
    id: uuid(),
    label: "Going out",
  },
];

export const TransactionColumns = [
  { field: "id", header: "#" },
  { field: "label", header: "Label" },
  { field: "date", header: "Date" },
  { field: "amount", header: "Amount" },
  { field: "category", header: "Category" },
];

export const CategoriesColumns = [
  { field: "id", header: "#" },
  { field: "label", header: "Label" },
];
