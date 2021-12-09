interface Category {
  id: number;
  label: string;
}

interface Transaction {
  id: number;
  label: string;
  date: date;
  amount: number;
  category: number;
}

type DataState = {
  categories: Category[];
  transactions: Transaction[];
};

type DataAction = {
  type: string;
  category: Category;
  transaction: Transaction;
};

type DispatchType = (args: DataAction) => DataAction;
