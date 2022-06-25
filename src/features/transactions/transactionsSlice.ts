import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Transaction = {
  id: string
  label: string
  date: string
  amount: number
  category: string
}

export type TransactionsState = {
  transactions: Transaction[]
}

const initialState: TransactionsState = {
  transactions: [
    {
      id: '1',
      label: 'Lunch',
      date: '2022-06-02',
      amount: 1000,
      category: 'salary',
    },
    {
      id: '2',
      label: 'Lunch',
      date: '2022-06-02',
      amount: -10,
      category: 'commute',
    },
    {
      id: '3',
      label: 'Lunch',
      date: '2022-06-03',
      amount: -1,
      category: 'commute',
    },
  ],
}

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload)
    },
  },
})

export const { addTransaction } = transactionsSlice.actions
export const { reducer: transactionsReducer } = transactionsSlice
