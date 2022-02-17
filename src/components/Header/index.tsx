import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.headerContainer}>
    <Link className={styles.routerLinks} to={"/"}>
      Expenses App
    </Link>
    <Link className={styles.routerLinks} to={"/graphs"}>
      Charts
    </Link>
  </div>
);

export default Header;
