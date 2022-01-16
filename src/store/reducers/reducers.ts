import { combineReducers } from "redux";
import categoryReducer from "./categories/category.reducer";

const reducers = combineReducers({
  categories: categoryReducer,
});

export default reducers;
