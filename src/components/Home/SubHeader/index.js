import React, { useState } from "react";
import styles from "./SubHeader.module.scss";

const SubHeader = () => {
  const [query, setQuery] = useState("");

  const searchHandler = (e) => {
    setQuery(e.target.value);
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
              <button className={`${styles.btn} ${styles.addBtn}`}>
                Add Categry
              </button>
            </div>
            <div className={styles.addExpenses}>
              <button className={`${styles.btn} ${styles.addBtn}`}>
                Add Expenses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
