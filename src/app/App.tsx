import React from "react";
import "./App.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routes from "../routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="appWrapper">
      {/* <Link to="me">My Profile</Link> */}
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
