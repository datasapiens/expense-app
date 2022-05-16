import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoriesReducer, { initializeCategoriesStore } from '../store/reducers/categories';
import transactionsReducer, { initializeTransactionsStore } from '../store/reducers/transactions';
import { listenerMiddleware } from './middleware';
import { getStoreFromLocalStorage } from '../utils/localstorage';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    transactions: transactionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

const cachedStore = getStoreFromLocalStorage();

if (cachedStore) {
  store.dispatch(initializeCategoriesStore(cachedStore.categories));
  store.dispatch(initializeTransactionsStore(cachedStore.transactions))
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
