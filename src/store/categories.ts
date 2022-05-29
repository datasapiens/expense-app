import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from 'src/interfaces/category.interface'
import { Transaction } from 'src/interfaces/transaction.interface'
import type { RootState } from 'src/store/interfaces/store.interface'

const initialState: Category[] = []

export const categoriesSlice = createSlice({
    initialState,
    name: 'categories',
    reducers: {
        addCategory: (state, action: PayloadAction<Transaction>) => {
            state.push(action.payload)
        },
    },
})

export const { addCategory } = categoriesSlice.actions

export const selectCategories = (state: RootState) => state.categories

export default categoriesSlice.reducer
