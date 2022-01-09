import React from "react";
import "./App.module.scss";
import AppRouter from "./features/app-router/AppRouter";
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
