import { BrowserHistory } from "history";
import { combineReducers } from "redux";
import categoriesReducer from "../components/categories/categories.reducer";
import dashboardReducer from "../components/dashboard/dashboard.reducer";
import transactionsReducer from "../components/transactions/transactions.reducer";

const rootReducers = (history: BrowserHistory) => combineReducers({
  transactionState: transactionsReducer,
  categoriesState: categoriesReducer,
  dashboardState: dashboardReducer,
});

export default rootReducers;