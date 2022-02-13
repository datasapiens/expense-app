import React from "react";
import { HomeIcon, ChartBarIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header id={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Link className={styles.logo} to="/">
            EXPENSE
          </Link>
          <nav className={styles.navlinks}>
            <ul>
              <li>
                <Link to="/">
                  <HomeIcon className={`${styles.icon} ${styles.homeIcon}`} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="expense-app/graph/">
                  <ChartBarIcon
                    className={`${styles.icon} ${styles.barIcon}`}
                  />
                  <span>Graph</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
