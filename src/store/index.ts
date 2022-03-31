import { Action, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkAction } from "redux-thunk";
import categoryReducer from "./slices/category.slice";
import transactions from "./slices/transaction.slice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    transactions,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
