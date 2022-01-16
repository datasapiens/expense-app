import React from "react";
import { ITransaction } from "../../../interfaces";
import styles from "./TransactionItem.module.scss";

interface IProps {
  transaction: ITransaction;
}

const TransactionItem: React.FC<IProps> = ({ transaction }) => {
  return (
    <div className={styles.transactionItem}>
      <span>{transaction.label}</span>
      <span>{transaction.date}</span>
      <span>{transaction.category}</span>
      <span>{transaction.amount}</span>
    </div>
  );
};

export default TransactionItem;
