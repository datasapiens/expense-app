import React from "react";
import styles from "./NoContent.module.scss";

interface IProps {
  title: string;
}

const NoContent: React.FC<IProps> = ({ title }) => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>{`No ${title} found!`}</h1>
    </React.Fragment>
  );
};

export default NoContent;
