import { configureStore } from '@reduxjs/toolkit'
import categoryslice from './slices/categoryslice'
import transactionSlice from './slices/transactionslice'
import { loadState } from './storage/localState';

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