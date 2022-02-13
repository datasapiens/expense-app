import React, { useState } from "react";
import Modal from "../../Modal";
import { XIcon } from "@heroicons/react/outline";
import styles from "./SubHeader.module.scss";
import AddCategory from "../AddCategory";
import AddExpense from "../AddExpense/AddExpense";
import { searchExpense } from "../../../redux/actions/expenses";
import { useDispatch } from "react-redux";

const SubHeader = () => {
  const [show, setShow] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div id={styles.subheader}>
      <div className={styles.container}>
        <div className={styles.subheader}>
          <div className={styles.searchExpenses}>
            <input
              type="search"
              placeholder="Search...."
              value={query}
              onChange={searchHandler}
            />
          </div>
          <div className={styles.actions}>
            <div className={styles.addExpenses}>
              <button
                className={`${styles.btn} ${styles.addBtn}`}
                onClick={() => setShowCat(true)}
              >
                Add Categry
              </button>
            </div>
            <div className={styles.addExpenses}>
              <button
                className={`${styles.btn} ${styles.addBtn}`}
                onClick={() => setShow(true)}
              >
                Add Expenses
              </button>
            </div>
          </div>
        </div>
        <Modal show={showCat} onClose={() => setShowCat(false)}>
          <div className={styles.content}>
            <div className={styles.modalHeader}>
              <h2>Add Category</h2>
              <XIcon
                className={`${styles.icon} ${styles.closeIcon}`}
                onClick={() => setShowCat(false)}
              ></XIcon>
            </div>
            <div className={styles.modalBody}>
              <AddCategory setShowCat={setShowCat} />
            </div>
            <div className={styles.modalFooter}></div>
          </div>
        </Modal>

        <Modal show={show} onClose={() => setShow(false)}>
          <div className={styles.content}>
            <div className={styles.modalHeader}>
              <h2>Add expense/income</h2>
              <XIcon
                className={`${styles.icon} ${styles.closeIcon}`}
                onClick={() => setShow(false)}
              ></XIcon>
            </div>
            <div className={styles.modalBody}>
              <AddExpense setShow={setShow} />
            </div>
            <div className={styles.modalFooter}></div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SubHeader;
