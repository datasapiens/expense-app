// ------------- Categories -------------

// #1 Initial state
const initialState = [
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

// #2 Possible fixed Actions on the state
const addCategory = value => ({ type: 'ADD_CATEGORY', payload: value })
const addMultipleCategories = value => ({ type: 'ADD_MULTIPLE_CATEGORIES', payload: value })
const resetCategories = () => ({ type: 'RESET_CATEGORIES' })

// #3 Dispatch above actions with the help of reducers
function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [...state, action?.payload]
    case 'ADD_MULTIPLE_CATEGORIES':
      return [...state, ...action?.payload]
    case 'RESET_CATEGORIES':
      return { ...initialState }

    default:
      return state
  }
}

export default {
  initialState,
  actions: {
    addCategory,
    addMultipleCategories,
    resetCategories,
  },
  reducer: categoriesReducer,
}
