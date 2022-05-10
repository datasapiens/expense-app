import { ICategory } from "interfaces/category.interface";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  categorySelector,
  removeCategory,
} from "store/slices/category.slice";
import styles from "./category.module.scss";
import { uid } from "utils/helpers";

const CategoryTable = () => {
  const categories = useSelector(categorySelector);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      categories.some((c) => c.label.toLowerCase() === category.toLowerCase())
    )
      return alert("Category Already exist");
    const payload = { label: category, id: uid() };

    dispatch(addCategory(payload));
    setCategory("");
  };

  return (
    <div className={styles.categoryTable}>
      <h2>Categories</h2>
      <form onSubmit={handleAddCategory}>
        <input
          className="add-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          type="text"
          placeholder="Add new category"
        />
      </form>
      <table className="table">
        <tbody>
          {categories.map((category, i) => (
            <SingleRow key={i} category={category} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;

const SingleRow: React.FC<{ category: ICategory }> = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <tr className={styles.categoryItem}>
      <td>{category.label}</td>
      <td align="right">
        <button
          style={{ color: "red" }}
          onClick={() => dispatch(removeCategory(category.id))}
        >
          x
        </button>
      </td>
    </tr>
  );
};
