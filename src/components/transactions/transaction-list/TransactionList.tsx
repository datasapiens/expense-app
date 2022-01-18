import React from "react";
import { ITransaction } from "../../../interfaces";
import NoContent from "../../no-content/NoContent";
import TransactionItem from "../transaction-item/TransactionItem";
import TransactionListHeader from "../transaction-list-header/TransactionListHeader";
import styles from "./TransactionList.module.scss";
import { useSelector } from "react-redux";
import { getTransactions } from "../../../store";

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
