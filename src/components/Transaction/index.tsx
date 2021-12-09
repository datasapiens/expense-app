/* eslint-disable eqeqeq */
import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addTransaction } from "../../store/actionCreators";
import { Dispatch } from "redux";
import AddTrasnaction from "../AddTransaction";
import styles from "../../styles/transactions.module.scss";

const Index: React.FC = () => {
  const transactions: readonly Transaction[] = useSelector((state: DataState) => state.transactions, shallowEqual);
  const categories: readonly Category[] = useSelector((state: DataState) => state.categories, shallowEqual);

  const dispatch: Dispatch<any> = useDispatch();

  const saveTransaction = React.useCallback(
    (transaction: Transaction) => dispatch(addTransaction(transaction)),
    [dispatch]
  );

  //get category label
  const getCategory = (id: number) => {
    let category = categories.filter((c) => c.id == id)[0];
    return category?.label || "Category deleted or unavailable";
  };

  return (
    <div className="flex">
      <div className="transactions">
        <h2>
          <strong>Transactions</strong>
        </h2>
        <hr />
        <div className={styles.tableHeight}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th className={styles.th}>id</th>
              <th className={styles.th}>label</th>
              <th className={styles.th}>date</th>
              <th className={styles.th}>amount</th>
              <th className={styles.th}>category</th>
            </tr>
            {transactions.map((transaction: Transaction) => (
              <tr key={transaction.id} className={styles.tr}>
                <td className={styles.td}>{transaction.id}</td>
                <td className={styles.td}>{transaction.label}</td>
                <td className={styles.td}>{transaction.date}</td>
                <td className={styles.td} style={{ color: transaction.amount >= 0 ? "black" : "red" }}>
                  {transaction.amount}
                </td>
                <td className={styles.td}>{getCategory(transaction.category)}</td>
              </tr>
            ))}
          </table>
        </div>
        {transactions.length === 0 && <div className="no-data">No Data Yet</div>}
        <div className={styles.data}>
          <h5>
            Total Expesnes:{" "}
            {transactions.filter((transaction) => transaction.amount < 0).reduce((n, { amount }) => n + amount, 0)}
          </h5>
          <h5>
            Total Income:{" "}
            {transactions.filter((transaction) => transaction.amount >= 0).reduce((n, { amount }) => n + amount, 0)}
          </h5>
        </div>
      </div>

      <div className="add">
        <h4>Add Transaction</h4>
        <AddTrasnaction saveTransaction={saveTransaction} />
      </div>
    </div>
  );
};

export default Index;
