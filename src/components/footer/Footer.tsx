import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <p>
        <span>&copy; copyright {`${new Date().getFullYear()}`}</span> | <span>Bill Yengo</span> |{" "}
        <span>+372 58757703</span> | <span>yengobilly4063@gmail.com</span>
      </p>
    </div>
  );
};

export default Footer;
