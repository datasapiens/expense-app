import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { categoriesReducer } from '../features/categories/categoriesSlice'
import { transactionsReducer } from '../features/transactions/transactionsSlice'

export const store = configureStore({
  reducer: {
    categoires: categoriesReducer,
    transactions: transactionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useStore = () => useSelector((state: RootState) => state)
