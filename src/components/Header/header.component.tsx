import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const HeaderComp = () => {
  return (
    <header className={styles.nav}>
      <nav className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/graphs">Graphs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComp;
