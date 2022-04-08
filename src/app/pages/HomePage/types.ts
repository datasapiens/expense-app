export interface HomePageState {
  isLoading: boolean;
  error: boolean;
  categories: ICategory[];
  transactions: ITransaction[];
  totalExpenses: number;
  totalIncome: number;
}

export interface ICategory {
  id: number | string;
  value: string;
}

export interface ITransaction {
  label: string;
  date: string;
  amount: number | string;
  category: number | string;
}

export type ContainerState = HomePageState;
