import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initiateLocalStorageData } from 'src/initiateLocalStorageData'
import { Transaction } from 'src/interfaces/transaction.interface'
import { getTransactionsFromLocalStorage } from 'src/localStorage/transactions'
import type { RootState } from 'src/store/interfaces/store.interface'

initiateLocalStorageData()

const initialState: Transaction[] = getTransactionsFromLocalStorage()

export const transactionsSlice = createSlice({
    initialState,
    name: 'transactions',
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.unshift(action.payload)
        },
        setTransactions: (state, action: PayloadAction<Transaction[]>) => {
            state = action.payload
        },
    },
})

export const { addTransaction, setTransactions } = transactionsSlice.actions

export const selectTransactions = (state: RootState) => state.transactions

export default transactionsSlice.reducer
