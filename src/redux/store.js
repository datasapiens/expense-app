import { combineReducers, createStore } from "redux";
import { categoryReducer } from "./reducers/categories";
import { expenseReducer } from "./reducers/expenses";

const reducer = combineReducers({
  expenses: expenseReducer,
  categories: categoryReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
