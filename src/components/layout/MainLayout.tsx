import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./MainLayout.module.scss";

interface IProps {
  children: React.ReactChild;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
