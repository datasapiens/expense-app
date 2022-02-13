import { XIcon } from "@heroicons/react/outline";
import styles from "./Categories.module.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../../redux/actions/categories";
import { deleteExpense } from "../../../redux/actions/expenses";
import Modal from "../../Modal";

const Categories = () => {
  const [show, setShow] = useState(false);
  const [cat, setCat] = useState();
  const { categories } = useSelector((state) => state.categories);
  const { expenses } = useSelector((state) => state.expenses);

  const dispatch = useDispatch();

  const removeCategoryHandler = (status, category) => {
    setShow(status);
    setCat(category);
  };
  const removeCategory = () => {
    const equalLabels = expenses?.filter(
      (expense) => expense.category === cat.label
    );
    dispatch(deleteCategory(cat));
    dispatch(deleteExpense(equalLabels));
    setShow(false);
  };
  return (
    <div className={styles.categories}>
      <div className={styles.container}>
        <h1 className={styles.title}>Categories</h1>
        <ul className={styles.categoryCard}>
          {categories.length > 0 ? (
            categories.map((category) => (
              <li className={styles.categoryBody} key={category.id}>
                <small className={styles.categoryLabel}>{category.label}</small>
                <XIcon
                  className={`${styles.removeIcon}`}
                  title="Remove Category"
                  onClick={() => removeCategoryHandler(true, category)}
                />
                <Modal show={show} onClose={() => setShow(false)}>
                  <div className={styles.content}>
                    <div className={styles.modalHeader}>
                      <h2>🆘⭕❌ Attention</h2>
                      <XIcon
                        className={`${styles.icon} ${styles.iconClose}`}
                        onClick={() => setShow(false)}
                      ></XIcon>
                    </div>
                    <div className={styles.modalBody}>
                      <p className={styles.categoryDelTxt}>
                        Are you sure to delete <b>{cat?.label}</b> category?. If
                        you delete this category related all transactions will
                        be deleted.
                      </p>
                    </div>
                    <div className={styles.modalFooter}>
                      <button
                        className={`${styles.btn} ${styles.btnDelete}`}
                        onClick={removeCategory}
                      >
                        Delete
                      </button>
                      <button
                        className={`${styles.btn} ${styles.btnCancel}`}
                        onClick={() => setShow(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
              </li>
            ))
          ) : (
            <p>
              You don't have category. Click to add a <b>Add Category</b> button
              and add a new category.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
