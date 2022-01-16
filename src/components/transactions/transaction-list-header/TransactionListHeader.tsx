import React from "react";
import styles from "./TransactionListHeader.module.scss";

const transactionHeaderList: Array<string> = ["Transaction Name", "Date", "Category", "Amount"];

const TransactionListHeader: React.FC = () => {
  return (
    <div className={styles.transactionListHeader}>
      {transactionHeaderList.map((header: string, index: number) => (
        <span key={index}>{header}</span>
      ))}
    </div>
  );
};

export default TransactionListHeader;
