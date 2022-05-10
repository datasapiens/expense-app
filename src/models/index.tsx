export interface Category {
  id: number;
  label: string;
  deleteDate: number;
}

export interface Categories {
  data: Category[];
  finalId: number;
}

export interface Transaction {
  id: number;
  label: string;
  date: number;
  amount: number;
  category: number;
}

export interface Transactions {
  data: Transaction[];
  finalId: number;
}
