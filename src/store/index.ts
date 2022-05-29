import { configureStore } from '@reduxjs/toolkit'
import { setCategoriesToLocalStorage } from 'src/localStorage/categories'
import { setTransactionsToLocalStorage } from 'src/localStorage/transactions'
import transactions, { selectTransactions } from './transactions'
import categories, { selectCategories } from './categories'

export const store = configureStore({
    reducer: {
        categories,
        transactions,
    },
})

store.subscribe(() => {
    setCategoriesToLocalStorage(selectCategories(store.getState()))
    setTransactionsToLocalStorage(selectTransactions(store.getState()))
})
