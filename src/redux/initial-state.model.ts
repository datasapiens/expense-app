
export interface InitialState {
  transactionState: TransactionState | undefined;
  categoriesState: CategoriesState| undefined;
  dashboardState: DashboardState | undefined;
}

export interface DashboardState {
  incomeByCategoriesData: IncomeByCategoriesData[];
  outcomeByCategoriesData: OutcomeByCategoriesData[];
  balanceByMonthData: BalanceByMonthData[];
  isLoading: boolean;
  error: any;
}

export interface BalanceByMonthData {
  date: string,
  balance: number;
}

export interface IncomeByCategoriesData {
  name: string,
  value: number;
  percentage: string;
  color: string;
}

export interface OutcomeByCategoriesData {
  name: string,
  value: number;
  percentage: string;
  color: string;
}


export interface TransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  error: any;
}

export interface Transaction {
  transaction_id?: string;
  category_id: string;
  label: string;
  amount: number;
  date: Date;
}

export interface CategoriesState {
  categories: Category[];
  error: any;
  isLoading: boolean;
}

export interface Category {
  category_id?: string;
  label: string;
  removable?: boolean;
  color?: string;
}

export enum CategoryLabel {
  'SALARY' = 'Salary',
  'GIFTS' = 'Gifts',
  'BILLS' = 'Bills',
  'FOODS' = 'Foods',
  'GROCERY' = 'Grocery',
  'TRAVELING' = 'Traveling',
  'GOING OUT' = 'Going out',
  'OTHER' = 'Other',
}