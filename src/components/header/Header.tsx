import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <Container>
        <div className={styles.navWrapper}>
          <h1 className={styles.logo}>
            <Link to="/">DataSapiens</Link>{" "}
          </h1>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/graphs">Graphs</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
