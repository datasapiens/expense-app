import { combineReducers, createStore } from "redux";

const reducer = combineReducers({});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
