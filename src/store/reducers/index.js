import { combineReducers } from "redux";
import transaction from "./transaction";
import category from "./category";

export default combineReducers({
  transaction,
  category,
});
