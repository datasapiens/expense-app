import { configureStore } from '@reduxjs/toolkit'
import { initiateLocalStorageData } from 'src/initiateLocalStorageData'
import transactions from './transactions'
import categories from './categories'

initiateLocalStorageData()

export const store = configureStore({
    reducer: {
        categories,
        transactions,
    },
})
