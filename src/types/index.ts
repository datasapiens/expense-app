export interface Category {
  id: number;
  label: string;
}

export interface Transaction {
  id: number;
  label: string;
  date: number;
  amount: number;
  category: Category[];
}
