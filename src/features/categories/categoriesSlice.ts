import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Category = {
  id: string
  label: string
}

export type CategoriesState = {
  categories: Category[]
}

const initialState: CategoriesState = {
  categories: [
    { id: 'food', label: 'Food' },
    { id: 'salary', label: 'Salary' },
    { id: 'going-out', label: 'Going out' },
    { id: 'commute', label: 'Commuting' },
  ],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload)
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      )
    },
  },
})

export const { addCategory, removeCategory } = categoriesSlice.actions

export const { reducer: categoriesReducer } = categoriesSlice
