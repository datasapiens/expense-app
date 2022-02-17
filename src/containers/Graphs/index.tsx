import React from "react";
import { useSelector } from "react-redux";
import { BarChart } from "../../components/BarChart";
import { PieChart } from "../../components/PieChart";
import styles from "./Graphs.module.scss";

const Graphs = () => {
  const transactions = useSelector(
    (state: any) => state.transactions.transactions
  );
  const allCategories = useSelector(
    (state: any) => state.categories.categories
  );

  return (
    <div>
      <div className={styles.pieGraphsContainer}>
        <div className={styles.graphContainer}>
          <p className={styles.graphTitle}>Incomes</p>
          <PieChart
            transactions={transactions}
            categories={allCategories}
            type="incomes"
          />
        </div>
        <div className={styles.graphContainer}>
          <p className={styles.graphTitle}>Expenses</p>
          <PieChart
            transactions={transactions}
            categories={allCategories}
            type="expenses"
          />
        </div>
      </div>
      <div className={styles.barGraphsContainer}>
        <div className={styles.graphContainer}>
          <p className={styles.graphTitle}>Total</p>
          <BarChart
            transactions={transactions}
            categories={allCategories}
            type="expenses"
          />
        </div>
      </div>
    </div>
  );
};

export default Graphs;
