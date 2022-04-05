import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import styles from "../styles/App.module.scss";
import { IoHomeOutline, IoBarChartOutline } from "react-icons/io5";


import Home from "./home";
import Graphs from "./graphs";

function Router() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="graphs" element={<Graphs />} />
        </Routes>
      </div>
      <div className={styles.tabBar}>
          <NavLink to={"/"} className={styles.tab}>
            <IoHomeOutline size={30} />
            <span>Home</span>
          </NavLink>
          <NavLink to={"graphs"} className={styles.tab}>
            <IoBarChartOutline size={30} />
            <span>Graphs</span>
          </NavLink>
      </div>
    </div>
  );
}

export default Router;
