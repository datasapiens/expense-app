export interface ITransaction {
  id?: string;
  label?: string;
  date?: Date;
  amount?: number;
  type?: ExpenseType;
  category?: string;
}

export enum ExpenseType {
  EXPENSE = "expense",
  INCOME = "income",
}
