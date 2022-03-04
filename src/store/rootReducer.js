// ------------- Root Reducer -------------

// individual reducers
import transactionsReducer from './reducers/transactions'
import categoriesReducer from './reducers/categories'
import { logger, storeToLocalStorage } from './middlewares'

import { LOCAL_STORAGE_KEY } from 'src/Constants'

const lsString = localStorage.getItem(LOCAL_STORAGE_KEY)
const lsObject = !!lsString ? JSON.parse(lsString) : {}

// Default Global state of application at launch
export const initialState = {
  // lower data precedence
  transactions: transactionsReducer.initialState,
  categories: categoriesReducer.initialState,

  // higher data precedence
  ...lsObject,
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
  storeToLocalStorage(currentState)

  return currentState
}

export default rootReducer
