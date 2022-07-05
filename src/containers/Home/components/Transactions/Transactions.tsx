import { Card } from "components/Card/Card";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";
import styles from "./Transactions.module.scss";

export const Transactions = () => {
  return (
    <div className={styles.container}>
      <Card title="Transactions">
        <TransactionsTable />
      </Card>
    </div>
  );
};
