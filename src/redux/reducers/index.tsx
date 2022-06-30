import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./categoriesReducer";
import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
 categoryReducer,transactionReducer
})

export type RootState = ReturnType <typeof rootReducer>;

export default rootReducer