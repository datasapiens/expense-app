import { State } from "./types";

export const defaultState: State = {
  categories: JSON.parse(localStorage.getItem("categories") as string) || [],
  transactions:
    JSON.parse(localStorage.getItem("transactions") as string) || [],
};
