import React from "react";
import { ICategory } from "../../../interfaces";
import NoContent from "../../no-content/NoContent";
import CategoryItem from "../category-item/CategoryItem";
import CategoryListHeader from "../category-list-header/CategoryListHeader";
import styles from "./CategoryList.module.scss";

const categories: ICategory[] = [
  { id: "1", label: "Test" },
  { id: "2", label: "Food" },
];

const displayContent = () => {
  let content;
  if (categories.length === 0) {
    content = <NoContent title="categories" />;
  } else {
    content = (
      <React.Fragment>
        <h1>Categories</h1>
        <CategoryListHeader />
        <div className={styles.list}>
          {categories.map((category: ICategory) => (
            <CategoryItem category={category} key={category.id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
  return content;
};

const CategoryList: React.FC = () => {
  return <div>{displayContent()}</div>;
};

export default CategoryList;
