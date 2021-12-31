// outsource dependencies
import { fork } from 'redux-saga/effects';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxHistoryContext } from 'redux-first-history';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as controllerReducer, sagas as controllerSagas, path } from 'redux-saga-controller';

// local dependencies
import { config } from './config'


// Router
const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({
  history: createBrowserHistory()
});

// NOTE Build the middleware to run our Saga
const sagaMiddleware = createSagaMiddleware();

const storeName = config('DEBUG') ? '==> Datasapiens Expense App' : ''
const composeEnhancers = composeWithDevTools({
  name: storeName
});

// NOTE explain to ts what is it ;) to avoid type errors for --declaration
export const reducers = combineReducers({
  [path]: controllerReducer,
  // NOTE whatever what you may need
  router: routerReducer,
  form: form
});
// NOTE Create store outside of root to be able dispatch actions from anywhere!
export const store = createStore(reducers, composeEnhancers(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(routerMiddleware),
));

// NOTE simple initialize only 'controller' sagas
// saga.run(controllerSagas);

// NOTE or controller with some thing else
sagaMiddleware.run(function* () {
  // NOTE provide to 'controller' separated saga process
  yield fork(controllerSagas);
  // NOTE whatever what you may need
  // ... another code ...
});

export const history = createReduxHistory(store);
