import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
