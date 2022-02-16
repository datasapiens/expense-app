import React, { useEffect, useLayoutEffect } from "react";
import "./App.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routes from "../routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestCategories, requestTransactions } from "../state/actions";
import * as storageService from "../services/storageService";

const App = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    storageService.seedCategories();
    storageService.seedTransactions();
    console.log('App useLayoutEffect')
  }, []);

  useEffect(() => {
    dispatch(requestCategories());
    dispatch(requestTransactions());
    console.log('App useEffect')
  }, [dispatch]);

  return (
    <div className="appWrapper">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
