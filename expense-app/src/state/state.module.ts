import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { getStoreFromLocalStorage } from "../helpers/localstorate";
import { listenerMiddleware } from "./middleware";
import transactionsReducer, { initializeTransactionsStore } from "./store/reducers/transaction";

export const store = configureStore({
    reducer: {
      transactions: transactionsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  });

  const cachedStore = getStoreFromLocalStorage();

  if (cachedStore) {
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