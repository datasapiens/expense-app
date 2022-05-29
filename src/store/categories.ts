import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from 'src/interfaces/category.interface'
import { generateId } from 'src/utils/generateId'
import { getCategoriesFromLocalStorage } from 'src/localStorage/categories'
import type { RootState } from 'src/store/interfaces/store.interface'

const initialState: Record<string, Category> = getCategoriesFromLocalStorage()

export const categoriesSlice = createSlice({
    initialState,
    name: 'categories',
    reducers: {
        addCategory: (state, action: PayloadAction<string>) => {
            const category: Category = {
                id: generateId(),
                label: action.payload,
            }
            state[category.id] = category
        },
        setCategories: (
            state,
            action: PayloadAction<Record<string, Category>>
        ) => {
            state = action.payload
        },
    },
})

export const { addCategory, setCategories } = categoriesSlice.actions

export const selectCategories = (state: RootState) => state.categories

export default categoriesSlice.reducer
