import React from "react";
import { ICategory } from "../../../interfaces";
import { deleteCategory } from "../../../store/reducers/categories/category.action-creators";
import styles from "./CategoryItem.module.scss";
import { useDispatch } from "react-redux";
import { updateTransaction } from "../../../store/reducers/transactions/transaction.action-creators";

interface IProps {
  category: ICategory;
}

const CategoryItem: React.FC<IProps> = ({ category }) => {
  const dispatch = useDispatch();

  const handleCategoryDelete = () => {
    dispatch(deleteCategory(category));
    dispatch(updateTransaction(category.id!));
  };

  return (
    <div className={styles.item}>
      <span>{category.label}</span>
      <button onClick={handleCategoryDelete}>Delete</button>
    </div>
  );
};

export default CategoryItem;
