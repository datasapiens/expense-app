import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState")!)
  : {};
export const store = createStore(reducers, persistedState, applyMiddleware(thunk));

const saveToLocalStorage = (state: any) => {
  const jsonState = JSON.stringify(state);
  localStorage.setItem('reduxState', jsonState);
}
store.subscribe(()=> saveToLocalStorage(store.getState()))