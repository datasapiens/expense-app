import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import initialState from "./initial-state";
import rootEpics from "./root-epics";
import rootReducers from "./root-reducers";
import ReduxThunk from 'redux-thunk'

export const history = createBrowserHistory();
const composeEnhancers = (typeof (window) !== 'undefined'
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    history,
  },
});


const store = createStore(
  rootReducers(history),
  initialState as any,
  composeEnhancers(applyMiddleware(...[epicMiddleware, ReduxThunk]))
);

epicMiddleware.run(rootEpics);

export default store;