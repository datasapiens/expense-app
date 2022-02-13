import React, { useEffect, useState } from "react";
import styles from "./Expenses.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getExpense } from "../../../redux/actions/expenses";
import Card from "./Card";
import Table from "./Table";

const Expenses = () => {
  const [view, setView] = useState("table");
  const { expenses, query } = useSelector((state) => state.expenses);
  const filteredExpenses =
    query.length > 0
      ? expenses.filter((expense) =>
          expense.label.toLowerCase().includes(query.toLowerCase())
        )
      : expenses;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExpense());
  }, [query]);

  return (
    <div className={styles.expenses}>
      <div className={styles.container}>
        <div className={styles.expenseActions}>
          <h1 className={styles.title}>Transactions</h1>
          <select
            name="view"
            id="view"
            onChange={(e) => setView(e.target.value)}
          >
            <option value="table">Table</option>
            <option value="card">Card</option>
          </select>
        </div>
        <div className={styles.expenseList}>
          {filteredExpenses.length > 0 ? (
            view === "card" ? (
              filteredExpenses.map((expense) => (
                <Card key={expense.id} expense={expense} />
              ))
            ) : (
              <Table expenses={filteredExpenses} />
            )
          ) : (
            <p>You don't have any transaction yet!.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
