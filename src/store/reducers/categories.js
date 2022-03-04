// ------------- Categories -------------
import flattenCategories from 'src/utils/flattenCategories'

const initialCat = [
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

// #1 Initial state
const initialState = {
  categories: [...initialCat],
  categoryFM: flattenCategories(initialCat),
}

// #2 Possible fixed Actions on the state
const addCategory = value => ({ type: 'ADD_CATEGORY', payload: value })
const addMultipleCategories = value => ({ type: 'ADD_MULTIPLE_CATEGORIES', payload: value })
const removeCategory = value => ({ type: 'REMOVE_CATEGORY', payload: value })
const resetCategories = () => ({ type: 'RESET_CATEGORIES' })
const initCategoriesFM = () => ({ type: 'INIT_CATEGORIES_FM' })

// #3 Dispatch above actions with the help of reducers
function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      const addedCat = [...state?.categories, action.payload]
      return { categories: [...addedCat], categoryFM: flattenCategories(addedCat) }

    case 'ADD_MULTIPLE_CATEGORIES':
      const updatedCat = [...state?.categories, ...action?.payload]
      return { categories: [...updatedCat], categoryFM: flattenCategories(updatedCat) }

    case 'REMOVE_CATEGORY':
      const adjustedCat = state?.categories.filter(i => i.id != action.payload)
      return { categories: [...adjustedCat], categoryFM: flattenCategories(adjustedCat) }

    case 'RESET_CATEGORIES':
      return {
        categories: [...initialState.categories],
        categoryFM: flattenCategories(initialState.categories),
      }

    case 'INIT_CATEGORIES_FM':
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
    addMultipleCategories,
    initCategoriesFM,
  },
  reducer: categoriesReducer,
}
