import React from "react";
import { useSelector } from "react-redux";
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
    <div className={styles.graphsContainer}>
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
  );
};

export default Graphs;
