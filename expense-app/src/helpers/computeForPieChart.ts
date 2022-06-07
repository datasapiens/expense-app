import { Transaction } from "../interfaces/transaction.interface";

export const getIncome = (transactions: Transaction[]) => {
    const income: number[] =[];
    transactions.forEach((tx) => {
      if (tx.amount) {
        if (tx.amount > 0) {
          income.push(tx.amount)
        }
      }
    });
  return income;
}
export const getExpenses = (transactions: Transaction[]) => {
    const expense: number[] = [];
    transactions.forEach((tx) => {
      if (tx.amount) {
        if (tx.amount < 0) {
          expense.push(tx.amount)
        }
      }
    });
    return expense;
}