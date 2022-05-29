import { configureStore } from '@reduxjs/toolkit'
import transactions from './transactions'
import categories from './categories'

export const store = configureStore({
    reducer: {
        categories,
        transactions,
    },
})
