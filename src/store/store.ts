import { createStore, applyMiddleware, Reducer } from "redux";
import reducers from "./reducers/reducers";
import thunk from "redux-thunk";
import { defaultState } from "./reducers/initial-state";

export const store = createStore(reducers, defaultState, applyMiddleware(thunk));
