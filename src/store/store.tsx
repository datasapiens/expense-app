import { createStore, Reducer } from "redux";
import { reducer } from "./reducer";
import { defaultState } from "./state";
import { Actions, State } from "./types";

const store = createStore(reducer as Reducer<State, Actions>, defaultState);

export default store;
