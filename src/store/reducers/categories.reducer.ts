import { createSlice } from '@reduxjs/toolkit'
import { Category } from '../../data'
import { RootState } from '../store'

export interface CategoriesSate {
  model: Category[]
}

export const initialState: CategoriesSate = {
  model: [],
}

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    init: (state, action) => {
      state.model = action.payload
    },
    add: (state, action) => {
      state.model.push(action.payload)
    },
    remove: (state, action) => {
      state.model = state.model.filter((category) => category.id !== action.payload)
    },
  },
})

export const categoriesSelector = (state: RootState) => state.root.categories.model

export const {
  init: initialiseCategoriesAction,
  add: addCategoryAction,
  remove: removeCategoryAction,
} = categories.actions

export default categories.reducer
