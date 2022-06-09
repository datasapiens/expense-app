import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { getStoreFromLocalStorage } from "../helpers/localstorate";
import { listenerMiddleware } from "./middleware";
import categoriesReducer, { initializeCategoriesStore } from "./store/reducers/categories.reducer";
import transactionsReducer, { initializeTransactionsStore } from "./store/reducers/transaction.reducer";

export const store = configureStore({
    reducer: {
      transactions: transactionsReducer,
      categories: categoriesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  });

  const cachedStore = getStoreFromLocalStorage();

  if (cachedStore) {
    store.dispatch(initializeTransactionsStore(cachedStore.transactions))
    store.dispatch(initializeCategoriesStore(cachedStore.categories))
  }

  export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
