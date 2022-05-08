import { configureStore } from "@reduxjs/toolkit";
import { localStorageSync } from "state/middleware/localStorageSyncMiddleware";
import { Categories } from "state/slice/categories";
import { Transactions } from "state/slice/transactions";
import { preloadState } from "state/preloadState";

export const store = configureStore({
  reducer: {
    categories: Categories.reducer,
    transactions: Transactions.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageSync.middleware),
  preloadedState: preloadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
