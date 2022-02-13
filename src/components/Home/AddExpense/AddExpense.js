import React, { useEffect, useState } from "react";
import styles from "./AddExpense.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "../../../helpers/uid";
import { getCategory } from "../../../redux/actions/categories";
import { addExpense } from "../../../redux/actions/expenses";

const AddExpense = ({ setShow }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const addHandler = () => {
    if (!title || !amount || !category) {
      return setMessage("Please fill the fields!");
    }
    const expenseData = {
      id: uid(),
      label: title,
      amount,
      category,
      date: new Date(),
    };

    dispatch(addExpense(expenseData));
    setShow(false);
    setTitle("");
    setAmount("");
  };

  return (
    <div className={styles.categoryForm}>
      {message && <p className={styles.error}>{message}</p>}
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <small>
          * For expense use <b>-</b> , like this <b>-500</b> . For Income only
          number like this <b>500</b>
        </small>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option value={category.label} key={category.id}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <button className={`${styles.btn} ${styles.btnAdd}`} onClick={addHandler}>
        Add
      </button>
    </div>
  );
};

export default AddExpense;
