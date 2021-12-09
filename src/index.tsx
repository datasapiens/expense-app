import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { saveState, loadState } from "./utils/state";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";
import "./index.scss";

const persistedStore = loadState();

const store: Store<DataState, DataAction> & {
  dispatch: DispatchType;
} = createStore(reducer, persistedStore, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
