import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Transaction } from 'src/interfaces/transaction.interface'
import type { RootState } from 'src/store/interfaces/store.interface'

const initialState: Transaction[] = []

export const transactionsSlice = createSlice({
    initialState,
    name: 'transactions',
    reducers: {
        addTransactions: (state, action: PayloadAction<Transaction>) => {
            state.push(action.payload)
        },
    },
})

export const { addTransactions } = transactionsSlice.actions

export const selectTransactions = (state: RootState) => state.transactions

export default transactionsSlice.reducer
