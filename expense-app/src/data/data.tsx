import { v4 as uuid } from "uuid";

export const catData = [
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
export const tableData = [
  // {
  //   id: uuid(),
  //   label: "Kim Parrish",
  //   amount: -222,
  //   date: "07/11/2020",
  //   category: "Traveling",
  // },
  // {
  //   id: uuid(),
  //   label: "Michele Castillo",
  //   amount: -20,
  //   date: "07/11/2020",
  //   category: "Food",
  // },
  // {
  //   id: uuid(),
  //   label: "Eric Ferris",
  //   amount: -20,
  //   date: "07/10/2020",
  //   category: "Food",
  // },
  // {
  //   id: uuid(),
  //   label: "Gloria Noble",
  //   amount: -48,
  //   date: "07/09/2020",
  //   category: "Food",
  // },
  // {
  //   id: uuid(),
  //   label: "Darren Daniels",
  //   amount: 500,
  //   date: "07/07/2020",
  //   category: "Salary",
  // },
  // {
  //   id: uuid(),
  //   label: "Ted McDonald",
  //   amount: -89,
  //   date: "07/07/2020",
  //   category: "Going out",
  // },
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
