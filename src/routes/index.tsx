import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/home";
import Graphs from "../pages/graphs";

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Side Bar */}
      <div className="side-bar">
        <div className="title">Expense Tracker App</div>
        <hr />
        <NavLink
          end
          to="/"
          style={{ textDecoration: "none" }}
          className={(props) => {
            return `${props.isActive ? "section-active" : ""}`;
          }}
        >
          <div className="section">Home</div>
        </NavLink>

        <NavLink
          end
          to="/graphs"
          style={{ textDecoration: "none" }}
          className={(props) => {
            return `${props.isActive ? "section-active" : ""}`;
          }}
        >
          <div className="section">Graphs</div>
        </NavLink>
      </div>
      {/* Side Bar */}

      {/* Pages */}
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphs/" element={<Graphs />} />
        </Routes>
      </div>
      {/* Pages */}
    </BrowserRouter>
  );
};

export default Index;
