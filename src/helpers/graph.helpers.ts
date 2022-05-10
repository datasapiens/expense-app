import { ExpenseType, ICategory, ITransaction } from "../interfaces";

export interface IChartInfo {
  labels: Array<string>;
  data: Array<number>;
  colors: Array<string>;
}

export interface IPieChartData {
  labels?: Array<string>;
  datasets: Array<IDataSet>;
}

export interface IDataSet {
  label?: string;
  data: Array<number>;
  backgroundColor?: Array<string>;
  borderColor?: Array<string>;
  borderWidth?: 1;
}

const generateRGBACOlors = (): string => {
  const num = Math.round(0xffffff * Math.random());
  const r = num >> 16,
    g = (num >> 8) & 255,
    b = num & 255,
    a = 0.8;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const getCategoryChartData = (categories: Array<ICategory>, transactions: Array<ITransaction>): IChartInfo => {
  const labels: Array<string> = [];
  const data: Array<number> = [];
  console.log(transactions);
  console.log(categories);
  if (transactions.length === 0) return { labels: [], data: [], colors: [] };

  const unknownCategoryTransaction = transactions.filter((transaction) => !transaction.category);
  if (unknownCategoryTransaction.length !== 0) {
    labels.push("Unknown");
    data.push(unknownCategoryTransaction.length);
  }
  categories.forEach((category: ICategory) => {
    const transactionsFound: number = transactions.filter(
      (transaction: ITransaction) => transaction.category === category.id
    ).length;
    labels.push(category.label!);
    data.push(transactionsFound);
  });

  return {
    labels,
    data,
    colors: labels.map((label: string) => generateRGBACOlors()),
  };
};

export const getTransactionChartData = (transactions: Array<ITransaction>): IChartInfo => {
  const labels: Array<string> = [];
  const data: Array<number> = [];
  transactions.forEach((transaction: ITransaction) => {
    labels.push(transaction.label!);
    data.push(Math.abs(transaction.amount!));
  });

  return {
    labels,
    data,
    colors: labels.map((label: string) => generateRGBACOlors()),
  };
};

export const getExpenseTypeChartData = (transactions: Array<ITransaction>): IChartInfo => {
  const labels: Array<string> = [...Object.values(ExpenseType)];
  const data: Array<number> = [];
  labels.forEach((label: string) => {
    const expenseTypeCount = transactions.filter((transaction: ITransaction) => transaction.type === label).length;
    data.push(expenseTypeCount);
  });
  return { labels, data, colors: labels.map((label: string) => generateRGBACOlors()) };
};
