import { AnyAction, combineReducers, createReducer } from '@reduxjs/toolkit'
import categoriesReducer, { initialState as categoriesState } from './categories.reducer'
import transactionsReducer, { initialState as transactionsSate } from './transactions.reducer'

const initialState = {
  categories: categoriesState,
  transactions: transactionsSate,
}

const combinedReducers = combineReducers({
  categories: categoriesReducer,
  transactions: transactionsReducer,
})

const messagesRootReducer = createReducer(initialState, (builder) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  builder.addCase('reset', () => initialState).addDefaultCase(() => {})
})

export default (state = initialState, action: AnyAction) => {
  const newState = messagesRootReducer(state, action)
  return combinedReducers(newState, action)
}
