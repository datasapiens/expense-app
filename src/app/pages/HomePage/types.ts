export interface HomePageState {
  isLoading: boolean;
  categories: ICategory[];
  transactions: ITransaction[];
}

export interface ICategory {
  id: number | string;
  value: string;
}

export interface ITransaction {
  id: number | string;
  label: string;
  date: string;
  amount: number | string;
  category: number | string;
}

export type ContainerState = HomePageState;
