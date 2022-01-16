import React from "react";
import styles from "./CategoryListHeader.module.scss";
const CategoryHeaderList: string[] = ["Category Name", "Actions"];

const CategoryListHeader: React.FC = () => {
  return (
    <div className={styles.categoryListHeader}>
      {CategoryHeaderList.map((header: string, index: number) => (
        <span>{header}</span>
      ))}
    </div>
  );
};

export default CategoryListHeader;
