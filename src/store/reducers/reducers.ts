import { combineReducers } from "redux";
import categoryReducer from "./categories/category.reducer";
import transactionReducer from "./transactions/transaction.reducer";

const reducers = combineReducers({
  categories: categoryReducer,
  transactions: transactionReducer,
});

export default reducers;
