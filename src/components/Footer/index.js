import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.author}>
          Made by 💚
          <a
            href="https://farideyvazov.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Farid
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
