export interface HomePageState {
  isLoading: boolean;
  error: boolean;
  categories: ICategory[];
  transactions: ITransaction[];
  totalExpenses: number;
  totalIncome: number;
  isAddTransactionModalOpen: boolean;
  isAddCategoryModalOpen: boolean;
}

export interface ICategory {
  id: number | string;
  label: string;
}

export interface ITransaction {
  label: string;
  date: string;
  amount: number | string;
  category: number | string;
}

export enum EAddTypes {
  ADD_TRANSACTION_MODAL = 'transactions',
  ADD_CATEGORY_MODAL = 'category',
}

export type ContainerState = HomePageState;
