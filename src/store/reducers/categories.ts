// ------------- Categories -------------
import flattenCategories from 'src/utils/flattenCategories'

export interface Category {
  id: number
  label: string
}

export interface CategoryAction {
  type:
    | 'ADD_CATEGORY'
    | 'ADD_MULTIPLE_CATEGORIES'
    | 'REMOVE_CATEGORY'
    | 'RESET_CATEGORIES'
    | 'INIT_CATEGORIES_FLATMAP'
  payload?: any
}

const initialCat: Category[] = [
  {
    id: 1, // autoIncrement
    label: 'Salary',
  },
  {
    id: 2,
    label: 'Food',
  },
  {
    id: 3,
    label: 'Entertainment',
  },
]

interface CategoryState {
  categories: Category[]
  categoryFM?: any
}

// #1 Initial state
const initialState: CategoryState = {
  categories: [...initialCat],
  categoryFM: flattenCategories(initialCat),
}

// #2 Possible fixed Actions on the state
const addCategory = (value: Category): CategoryAction => ({ type: 'ADD_CATEGORY', payload: value })
// const addMultipleCategories = (value: Category[]): CategoryAction => ({
//   type: 'ADD_MULTIPLE_CATEGORIES',
//   payload: value,
// })
const removeCategory = (value: Category): CategoryAction => ({
  type: 'REMOVE_CATEGORY',
  payload: value,
})
const resetCategories = (): CategoryAction => ({ type: 'RESET_CATEGORIES' })
const initCategoriesFM = (): CategoryAction => ({ type: 'INIT_CATEGORIES_FLATMAP' })

// #3 Dispatch above actions with the help of reducers
function categoriesReducer(
  state: CategoryState = initialState,
  action: CategoryAction
): CategoryState {
  switch (action.type) {
    case 'ADD_CATEGORY':
      const addedCat = [...state?.categories, action.payload]
      return { categories: [...addedCat], categoryFM: flattenCategories(addedCat) }

    // case 'ADD_MULTIPLE_CATEGORIES':
    //   const updatedCat = [...state?.categories, ...action?.payload]
    //   return { categories: [...updatedCat], categoryFM: flattenCategories(updatedCat) }

    case 'REMOVE_CATEGORY':
      const adjustedCat = state?.categories.filter(i => i.id != action.payload)
      return { categories: [...adjustedCat], categoryFM: flattenCategories(adjustedCat) }

    case 'RESET_CATEGORIES':
      return {
        categories: [...initialState.categories],
        categoryFM: flattenCategories(initialState.categories),
      }

    case 'INIT_CATEGORIES_FLATMAP':
      return {
        ...state,
        categoryFM: flattenCategories(state.categories),
      }

    default:
      return state
  }
}

export default {
  initialState,
  actions: {
    addCategory,
    removeCategory,
    resetCategories,
    // addMultipleCategories,
    initCategoriesFM,
  },
  reducer: categoriesReducer,
}
