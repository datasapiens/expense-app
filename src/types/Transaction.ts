import { Category } from 'types/Category';

export type Transaction = {
  id: string;
  label: string;
  date: string;
  amount: number;
  category: Category['id'];
};
