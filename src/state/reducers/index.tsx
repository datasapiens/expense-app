import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer"
import transactionsReducer from "./transactionsReducer";

const reducer = combineReducers({
    categories: categoriesReducer,
    transactions: transactionsReducer
})

export default reducer;