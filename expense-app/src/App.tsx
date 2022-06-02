import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graphs from "./pages/graphs/Graphs";
import Home from "./pages/home/Home";
import SideNav from "./pages/side-nav/SideNav";
import "./styles/App.scss";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="sidebar">
        <SideNav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphs" element={<Graphs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
