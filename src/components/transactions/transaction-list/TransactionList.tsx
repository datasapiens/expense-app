import React from "react";
import { ITransaction } from "../../../interfaces";
import NoContent from "../../no-content/NoContent";
import TransactionItem from "../transaction-item/TransactionItem";
import TransactionListHeader from "../transaction-list-header/TransactionListHeader";
import styles from "./TransactionList.module.scss";
import { useSelector } from "react-redux";
import { getTransactions } from "../../../store";

// const transactions: Array<ITransaction> = [
//   { id: "1", label: "Get some potatoes", amount: -200, category: "Food", date: new Date() },
//   { id: "2", label: "Get some potatoes", amount: -200, category: "Test", date: new Date() },
//   { id: "3", label: "Get some potatoes", amount: -200, category: "Hardware", date: new Date() },
//   { id: "4", label: "Get some potatoes", amount: -200, category: "Hardware", date: new Date() },
// ];

const displayContent = (transactions: Array<ITransaction>) => {
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
  const transactions = useSelector(getTransactions);
  return <div>{displayContent(transactions)}</div>;
};

export default TransactionList;
