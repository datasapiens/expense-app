export interface TransactionModel {
  id?: number;
  label: string;
  date: string;
  amount: number | string;
  categoryId: number;
}
