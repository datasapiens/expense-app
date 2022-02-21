import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer";
import categoryReducer from "./categoryReducer";

const reducers = combineReducers({
    expense: expenseReducer,
    category: categoryReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>