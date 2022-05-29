import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from 'src/interfaces/category.interface'
import { generateId } from 'src/utils/generateId'
import { getCategoriesFromLocalStorage } from 'src/localStorage/categories'
import { CategoryState } from 'src/enums/categoryState.enum'
import type { RootState } from 'src/store/interfaces/store.interface'

const initialState: { list: Record<string, Category> } = {
    list: getCategoriesFromLocalStorage(),
}

export const categoriesSlice = createSlice({
    initialState,
    name: 'categories',
    reducers: {
        addCategory: (state, action: PayloadAction<string>) => {
            const category: Category = {
                id: generateId(),
                label: action.payload,
                state: CategoryState.ACTIVE,
            }
            state.list[category.id] = category
        },
        deleteCategory: (state, action: PayloadAction<string>) => {
            state.list[action.payload].state = CategoryState.DELETED
        },
        setCategories: (
            state,
            action: PayloadAction<Record<string, Category>>
        ) => {
            state.list = action.payload
        },
    },
})

export const { addCategory, setCategories, deleteCategory } =
    categoriesSlice.actions

export const selectCategories = (state: RootState) => state.categories.list
export const selectFilteredCategories = (state: RootState): Category[] =>
    Object.values(state.categories.list).filter(
        (category) => category.state === CategoryState.ACTIVE
    ) || []

export default categoriesSlice.reducer
