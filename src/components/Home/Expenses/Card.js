import React from "react";
import formatDate from "../../../helpers/formatDate";
import randomColor from "../../../helpers/randomColor";
import styles from "./Expenses.module.scss";

const Card = ({ expense }) => {
  return (
    <div
      className={`${expense.amount.includes("-") ? "red" : "green"} ${
        styles.card
      }`}
    >
      <div className={styles.expense}>
        <div className={styles.expenseLeft}>
          <h2 className={styles.expenseLabel}>{expense.label}</h2>
          <small>{formatDate(expense.date)}</small>
        </div>
        <div className={styles.expenseRight}>
          <p
            className={styles.expenseCategory}
            style={{ backgroundColor: `${randomColor()}` }}
          >
            {expense.category}
          </p>
          <p className={styles.expenseAmount}>{expense.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
