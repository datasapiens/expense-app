/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash.throttle';

import { createReducer } from './reducers';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const { run: runSaga } = sagaMiddleware;

// Create the store with saga middleware
const middlewares = [sagaMiddleware];

const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
];

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();

export let store = configureStore({
  reducer: createReducer(),
  preloadedState: persistedState,
  middleware: [...getDefaultMiddleware(), ...middlewares],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers,
});

export const overrideStore = (overrideState, overrideReducers) => {
  store = configureStore({
    reducer: overrideReducers || createReducer(),
    preloadedState: overrideState || persistedState,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });
  return store;
};

// Define state to persist
store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState({
      homePage:
        state && state.homePage
          ? {
              transactions: state.homePage.transactions,
              categories: state.homePage.categories,
            }
          : {},
    });
  }, 1000),
);

// Make reducers hot reloadable, see http://mxs.is/googmo
/* istanbul ignore next */
if (module.hot) {
  module.hot.accept('./reducers', () => {
    forceReducerReload(store);
  });
}
