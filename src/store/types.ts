export interface Actions {
  type: string;
  payload: Category | Transaction | string;
}

export interface State {
  categories: Array<Category>;
  transactions: Array<Transaction>;
}

export interface Category {
  id: string;
  label: string;
  color: string;
}

export interface Transaction {
  id: string;
  label: string;
  date: string;
  amount: number;
  category: Category;
}
