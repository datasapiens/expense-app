import { configureStore } from '@reduxjs/toolkit'
import categoryslice from './categoryslice'
import transactionSlice from './transactionslice'
import { loadState } from './localState';

export const store = configureStore({
  devTools: true,
  reducer: {
    category: categoryslice,
    transactions: transactionSlice
  },
  preloadedState: loadState(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch