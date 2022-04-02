import CategoryTable from "components/Category/categoryTable.component";
import TransactionsTable from "components/Transactions/transactionsTable.component";
import React from "react";
import styles from "./index.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome Guest</h1>

      <div className={styles.split}>
        <div className={styles.splitTransaction}>
          <TransactionsTable />
        </div>
        <div className={styles.splitCategory}>
          <CategoryTable />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
