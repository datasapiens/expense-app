import { Transaction } from "../interfaces/transaction.interface";

export const getIncome = (transactions: Transaction[]) => {
  const income: number[] = [];
  transactions.forEach((tx) => {
    if (tx.amount) {
      if (tx.amount > 0) {
        income.push(tx.amount);
      }
    }
  });
  return income;
};
export const getExpenses = (transactions: Transaction[]) => {
  const expense: number[] = [];
  transactions.forEach((tx) => {
    if (tx.amount) {
      if (tx.amount < 0) {
        expense.push(tx.amount);
      }
    }
  });
  return expense;
};

export const PieChartData = (transactions: Transaction[]) => {
  if (transactions.length > 0) {
    const income = getIncome(transactions).reduce((a, b) => a + b);
    const expense = getExpenses(transactions).reduce((a, b) => a + b);
    return {
      labels: ["Income", "Expenses"],
      datasets: [
        {
          label: "# of Votes",
          data: [income, expense],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  } else {
    return {
      labels: ["Income", "Expenses"],
      datasets: [
        {
          label: "# of Votes",
          data: [0, 0],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }
};
