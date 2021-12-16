import { configureStore } from '@reduxjs/toolkit'
import categoryslice from './categoryslice'

export const store = configureStore({
  reducer: {
    category: categoryslice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch