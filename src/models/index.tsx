export interface Category {
  id: number;
  label: string;
}

export interface Categories {
  data: Category[];
}

export interface Transaction {
  id: number;
  label: string;
  date: Date;
  amount: number;
  category: number;
}
