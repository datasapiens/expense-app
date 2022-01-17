import React from "react";
import { ICategory } from "../../../interfaces";
import NoContent from "../../no-content/NoContent";
import CategoryItem from "../category-item/CategoryItem";
import CategoryListHeader from "../category-list-header/CategoryListHeader";
import styles from "./CategoryList.module.scss";
import { useSelector } from "react-redux";
import { getCategories } from "../../../store/reducers/categories/category.reducer";

const displayContent = (categories: Array<ICategory>) => {
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
  const categories = useSelector(getCategories);
  return <div>{displayContent(categories)}</div>;
};

export default CategoryList;
