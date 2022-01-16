import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <h1>Page Not found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
