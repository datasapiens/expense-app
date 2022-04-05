import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoriesReducer from './features/categories/categoriesSlice';
import itemsReducer from './features/items/itemsSlice';
import { loadState } from "./browser-storage";


export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    items: itemsReducer,
  },
  preloadedState: loadState(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
