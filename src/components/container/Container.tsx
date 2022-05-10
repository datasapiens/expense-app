import React from "react";
import styles from "./Container.module.scss";

interface IProps {
  children: JSX.Element | Array<JSX.Element>;
}

const Container: React.FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
