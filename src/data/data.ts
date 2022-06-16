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
    label: 'Car insurance',
    date: new Date(),
    amount: -500,
    category: 'insurance',
  },
  {
    id: 'transaction-1',
    label: 'Plain ticket',
    date: new Date(),
    amount: -1200,
    category: 'transport',
  },
  {
    id: 'transaction-2',
    label: 'Health money',
    date: new Date(),
    amount: -200,
    category: 'utilities',
  },
  {
    id: 'transaction-3',
    label: 'Rental income',
    date: new Date(),
    amount: 3000,
    category: 'rental',
  },
  {
    id: 'transaction-3',
    label: 'Property rent',
    date: new Date(),
    amount: 2000,
    category: 'rental',
  },
]
