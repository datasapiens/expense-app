import React from "react";
import "./App.css";
import { CoreLayout } from "./layout/coreLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
// import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
