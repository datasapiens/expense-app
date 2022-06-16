import { createSlice } from '@reduxjs/toolkit'
import { Transaction } from '../../data'
import { RootState } from '../store'

export interface TransactionsState {
  model: Transaction[]
}

export const initialState: TransactionsState = {
  model: [],
}

export const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    init: (state, action) => {
      state.model = action.payload
    },
    add: (state, action) => {
      state.model.push(action.payload)
    },
  },
})

export const transactionsSelector = (state: RootState) => state.root.transactions.model

export const { init: initialiseTransactionsAction, add: addTransactionAction } =
  transactions.actions

export default transactions.reducer
