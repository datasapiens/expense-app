import React from "react";
import { ITransaction } from "../../../interfaces";
import NoContent from "../../no-content/NoContent";
import TransactionItem from "../transaction-item/TransactionItem";
import TransactionListHeader from "../transaction-list-header/TransactionListHeader";
import styles from "./TransactionList.module.scss";
const transactions: ITransaction[] = [
  { id: "1", label: "Get some potatoes", amount: -200, category: "Food", date: "10/23/2021" },
  { id: "2", label: "Get some potatoes", amount: -200, category: "Test", date: "10/23/2021" },
  { id: "3", label: "Get some potatoes", amount: -200, category: "Hardware", date: "10/23/2021" },
  { id: "3", label: "Get some potatoes", amount: -200, category: "Hardware", date: "10/23/2021" },
];

const displayContent = () => {
  let content;
  if (transactions.length === 0) {
    content = <NoContent title="transactions" />;
  } else {
    content = (
      <React.Fragment>
        <h1>Transactions</h1>
        <TransactionListHeader />
        <div className={styles.transactionList}>
          {transactions.map((transaction: ITransaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
        </div>
      </React.Fragment>
    );
  }

  return content;
};

const TransactionList: React.FC = () => {
  return <div>{displayContent()}</div>;
};

export default TransactionList;
