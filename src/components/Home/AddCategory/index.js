import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddCategory.module.scss";
import { uid } from "../../../helpers/uid";
import { addCategory } from "../../../redux/actions/categories";

const AddCategory = ({ setShowCat }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const { categories } = useSelector((state) => state.categories);
  const category = categories?.map((cat) => cat.label);

  const dispatch = useDispatch();
  const addHandler = () => {
    if (!title) {
      return setMessage("Please fill the field!");
    }
    if (
      category.includes(title || title.toLowerCase() || title.toUpperCase())
    ) {
      return setMessage("This category has already been added");
    }
    const newCategory = {
      id: uid(),
      label: title,
    };

    dispatch(addCategory(newCategory));
    setShowCat(false);
    setTitle("");
    setMessage("");
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

      <button className={`${styles.btn} ${styles.btnAdd}`} onClick={addHandler}>
        Add
      </button>
    </div>
  );
};

export default AddCategory;
