// ------------- Root Reducer -------------

// individual reducers
import transactionsReducer from './reducers/transactions'
import categoriesReducer from './reducers/categories'

import { logger } from './middlewares'

// Default Global state of application at launch
export const initialState = {
  transactions: transactionsReducer.initialState,
  categories: categoriesReducer.initialState,
}

const rootReducer = (state, action) => {
  // Receiving previous state here
  const { transactions, categories } = state

  // Receiving current state here
  const currentState = {
    transactions: transactionsReducer.reducer(transactions, action),
    categories: categoriesReducer.reducer(categories, action),
  }

  // Middlewares
  logger(action, state, currentState)

  return currentState
}

export default rootReducer
