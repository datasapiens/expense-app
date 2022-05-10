import React from "react";
import styles from "./Graphs.module.scss";

import { ItemCategoryPie, IncomeExpenseBar } from "../../redux/features/items/Charts";

function Graphs() {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        <h3>Expense by category</h3>
        <ItemCategoryPie />
      </div>
      <div className={styles.chart}>
        <h3>Monthly income/expenditure comparison</h3>
        <IncomeExpenseBar />
      </div>
    </div>
  );
}

export default Graphs;
