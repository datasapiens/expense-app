import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { addCategory, removeCategoryThunk, Categories } from "./categoriesSlice";
import { IoRemoveCircleOutline } from "react-icons/io5";
import styles from "./Categories.module.scss";

export function CategoriesList() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(Categories);
  const [category, setCategory] = useState("");

  const handleChange = (e: any) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => dispatch(addCategory(category));

  const handleRemove = (id: string) => dispatch(removeCategoryThunk(id));

  return (
    <div>
      <div className={styles.formContainer}>
        <h3>Categories</h3>
        <div className={styles.list}>
          {categories.map((category) => (
            <div className={styles.item} key={category.id}>
              {category.label}
              <IoRemoveCircleOutline
                size={20}
                color={"red"}
                onClick={() => handleRemove(category.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.formContainer}>
        <input value={category} onChange={handleChange} />
        <button onClick={handleSubmit}>Add new category</button>
      </div>
    </div>
  );
}
