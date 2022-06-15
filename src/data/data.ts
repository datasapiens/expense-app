import { Category, Transaction } from './types'

export const CATEGORIES: Category[] = [
  { id: 'housing', label: 'Housing' },
  { id: 'food', label: 'Food' },
  { id: 'transport', label: 'Transport' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'utilities', label: 'Utilities' },
  { id: 'rental', label: 'Rental income' },
]

export const TRANSACTIONS: Transaction[] = [
  {
    id: 'transaction-0',
    label: 'Health money',
    date: new Date(),
    amount: -500,
    category: 'insurance',
  },
  {
    id: 'transaction-1',
    label: 'Health money',
    date: new Date(),
    amount: -120,
    category: 'insurance',
  },
  {
    id: 'transaction-2',
    label: 'Health money',
    date: new Date(),
    amount: -20,
    category: 'utilities',
  },
  {
    id: 'transaction-3',
    label: 'Health insurance',
    date: new Date(),
    amount: 3000,
    category: 'insurance',
  },
]