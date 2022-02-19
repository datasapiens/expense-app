export interface Transaction {
  id: number;
  label: string;
  date: number;
  amount: string;
  category: number | null;
}

export interface TransactionsInitialState {
  data: Transaction[];
}
