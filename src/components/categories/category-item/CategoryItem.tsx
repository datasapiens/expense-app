import React from "react";
import { ICategory } from "../../../interfaces";
import styles from "./CategoryItem.module.scss";

interface IProps {
  category: ICategory;
}

const CategoryItem: React.FC<IProps> = ({ category }) => {
  return (
    <div className={styles.item}>
      <span>{category.label}</span>
      <button>Delete</button>
    </div>
  );
};

export default CategoryItem;
