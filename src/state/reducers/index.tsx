import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer"

const reducer = combineReducers({
    categories: categoriesReducer
})

export default reducer;