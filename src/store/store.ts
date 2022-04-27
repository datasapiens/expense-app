import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { categoryReducer } from './category/categoryStore';
import { transactionReducer } from './transaction/transactionStore';
import { listenerMiddleware } from 'store/middleware/persistState';

const entitiesReducers = combineReducers({
  categories: categoryReducer,
  transactions: transactionReducer,
});

export const store = configureStore({
  reducer: {
    entities: entitiesReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
