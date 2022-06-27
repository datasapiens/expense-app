import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Category = {
  id: string
  label: string
}

export type Transaction = {
  id: string
  label: string
  date: string
  amount: number
  category: string
}

export const DEFAULT_CATEGORY: Category = {
  id: 'OTHER',
  label: 'Other',
}

export type ExpenseTrackerState = {
  categories: Category[]
  categoryDictionary: {
    [key: string]: string
  }
  transactions: Transaction[]
}

const initialState: ExpenseTrackerState = {
  categories: [
    { id: 'food', label: 'Food' },
    { id: 'salary', label: 'Salary' },
    { id: 'going-out', label: 'Going out' },
    { id: 'commute', label: 'Commuting' },
    DEFAULT_CATEGORY,
  ],
  categoryDictionary: {
    ['food']: 'Food',
    ['salary']: 'Salary',
    ['going-out']: 'Going out',
    ['commute']: 'Commuting',
    [DEFAULT_CATEGORY.id]: DEFAULT_CATEGORY.label,
  },
  transactions: [],
}

export const categoriesSlice = createSlice({
  name: 'expenseTracker',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload)
      state.categoryDictionary[action.payload.id] = action.payload.label
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      )
      state.transactions = state.transactions.map((transaction) =>
        transaction.category === action.payload
          ? { ...transaction, category: DEFAULT_CATEGORY.id }
          : transaction
      )
      delete state.categoryDictionary[action.payload]
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload)
    },
  },
})

export const { addCategory, removeCategory, addTransaction } =
  categoriesSlice.actions

export const { reducer: expenseTrackerReducer } = categoriesSlice
