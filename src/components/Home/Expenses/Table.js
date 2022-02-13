import React from "react";
import formatDate from "../../../helpers/formatDate";
import styles from "./Expenses.module.scss";

const Table = ({ expenses }) => {
  return (
    <div className={styles.expenseTable}>
      <table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Created date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.label}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{formatDate(expense.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
