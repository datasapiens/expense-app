import React from "react";
import { ICategory, ITransaction } from "../../../interfaces";
import styles from "./TransactionItem.module.scss";
import { useSelector } from "react-redux";
import { getCategories } from "../../../store/reducers/categories/category.reducer";

interface IProps {
  transaction: ITransaction;
}

const getCategoryName = (categories: Array<ICategory>, id?: string): string => {
  const category: ICategory | undefined = categories.find((category: ICategory) => category.id === id);
  return category?.label ? category.label : "Unknown";
};

const TransactionItem: React.FC<IProps> = ({ transaction }) => {
  const categories = useSelector(getCategories);
  return (
    <div className={styles.transactionItem}>
      <span>{transaction.label}</span>
      <span>{transaction.date}</span>
      <span>{getCategoryName(categories, transaction.category)}</span>
      <span>{transaction.type}</span>
      <span>{transaction.amount}</span>
    </div>
  );
};

export default TransactionItem;
