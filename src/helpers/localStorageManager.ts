import { Category, Transaction } from "../store/types";

export class LocalStorageManager {
  public static getItem(item: string) {
    return JSON.parse(localStorage.getItem(item) as string) || "";
  }

  public static setItem(
    name: string,
    content: Array<Category> | Array<Transaction>
  ) {
    localStorage.setItem(name, JSON.stringify(content));
  }
}
