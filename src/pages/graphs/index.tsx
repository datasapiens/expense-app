import React from "react";
import { BarChart, PieChart } from "../../components";
import styles from "../../styles/graphs.module.scss";

const index = () => {
  return (
    <div className="page">
      <div className={styles.container}>
        <div className={styles.dimensions}>
          <BarChart />
        </div>
        <div className={styles.dimensions}>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default index;
