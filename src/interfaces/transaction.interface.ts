export interface ITransaction {
  id?: string;
  label?: string;
  date?: string;
  amount?: number;
  type?: ExpenseType;
  category?: string;
}

export enum ExpenseType {
  EXPENSE = "Expense",
  INCOME = "Income",
}
