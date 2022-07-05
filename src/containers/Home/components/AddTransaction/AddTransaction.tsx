import { Card } from "components/Card/Card";
import { AddTransactionForm } from "../AddTransactionForm/AddTransactionForm";
import styles from "./AddTransaction.module.scss";

export const AddTransaction = () => {
  return (
    <div className={styles.container}>
      <Card title="New Transaction">
        <AddTransactionForm />
      </Card>
    </div>
  );
};
