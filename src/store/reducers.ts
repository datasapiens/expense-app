/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { InjectedReducersType } from 'utils/types/injector-typings';

export const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['homePage'],
};

const persistReducers: InjectedReducersType = persistConfig.whitelist.reduce(
  (result, reducerKey) => {
    // Create empty reducers for keys that don't have loaded dynamic reducer yet
    // They will be replaced by the real one
    // See https://github.com/rt2zz/redux-persist/pull/1047/files
    result[reducerKey] = (state = null) => state;
    return result;
  },
  {},
);

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return state => state;
  } else {
    return persistCombineReducers(persistConfig, {
      ...persistReducers,
      ...injectedReducers,
    });
  }
}
