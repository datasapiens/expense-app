import { storeConstants } from "../../helpers";
import { defaultState } from "../initial-state";
import { IState } from "../types/state.types";

const transactionReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case "add-transaction":
      return state + action.payload;
    default:
      return state;
  }
};

export default transactionReducer;
