import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addCategory, removeCategory } from "../../store/actionCreators";
import { Dispatch } from "redux";
import AddCategory from "../AddCategory";
import CategoryCard from "../CategoryCard";
import styles from "../../styles/categories.module.scss";

const Index: React.FC = () => {
  const categories: readonly Category[] = useSelector((state: DataState) => state.categories, shallowEqual);

  const dispatch: Dispatch<any> = useDispatch();

  const saveCategory = React.useCallback((category: Transaction) => dispatch(addCategory(category)), [dispatch]);

  return (
    <div className="flex">
      <div className="transactions">
        <h2>
          <strong>Categories</strong>
        </h2>
        <hr />
        <div className={styles.gridContainer}>
          {categories.map((category: Category) => (
            <CategoryCard cat={category} removeCategory={removeCategory} />
          ))}
        </div>

        {categories.length === 0 && <div className="no-data">No Data Yet</div>}
      </div>

      <div className="add">
        <h4>Add Category</h4>
        <AddCategory saveCategory={saveCategory} />
      </div>
    </div>
  );
};

export default Index;
