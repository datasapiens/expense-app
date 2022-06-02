import React, { FC } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
// import Graphs from "./pages/graphs/Graphs";
// import Home from "./pages/home/Home";
import SideNav from "./pages/side-nav/SideNav";
import "./styles/App.scss";

const App: FC = () => {
  return (
    <Router>
      <SideNav />
      <Routes>
        {/* <Route path="/" component={Home} exact></Route>
        <Route path="/graphs" component={Graphs} exact></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
