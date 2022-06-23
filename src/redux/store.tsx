import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import thunk from "redux-thunk";
import storage from './storage';


const persistConfig = {
    key: 'root',
    version:1,
    storage,
  }


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store  =  configureStore({
   reducer: persistedReducer,
   devTools:true,
   middleware:[thunk],
})

export const persistor  =  persistStore(store)

export type AppDispatch  = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> =  ThunkAction<
ReturnType,RootState,unknown,Action<string>>