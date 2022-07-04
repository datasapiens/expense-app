import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import transactionsReducer from "../features/transactions/transactionsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

const persistedReducers = persistCombineReducers(
  {
    key: "root",
    storage,
  },
  {
    transactions: transactionsReducer,
    categories: categoriesReducer,
  },
);

export const store = configureStore({
  reducer: persistedReducers,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
