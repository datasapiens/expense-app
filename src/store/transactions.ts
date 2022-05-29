import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initiateLocalStorageData } from 'src/initiateLocalStorageData'
import { Transaction } from 'src/interfaces/transaction.interface'
import { getTransactionsFromLocalStorage } from 'src/localStorage/transactions'
import { Category } from 'src/interfaces/category.interface'
import { CategoryState } from 'src/enums/categoryState.enum'
import { selectCategories } from './categories'
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

export const selectTransactions = (state: RootState): Transaction[] =>
    state.transactions
export const selectFilteredTransactions = (state: RootState): Transaction[] => {
    const categories: Record<string, Category> = selectCategories(state)

    return (
        state.transactions.filter((transaction) => {
            const category: Category = categories[transaction.categoryId]
            return category && category.state === CategoryState.ACTIVE
        }) || []
    )
}

export default transactionsSlice.reducer
