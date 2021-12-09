import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import styles from "../../styles/categories.module.scss";

type Props = {
  cat: Category | any;
  removeCategory: (category: Category) => void;
};

const Index: React.FC<Props> = ({ cat, removeCategory }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteCategory = React.useCallback(
    (category: Category) => dispatch(removeCategory(category)),
    [dispatch, removeCategory]
  );

  return (
    <div className={styles.card}>
      <div className={styles.id}>{cat.id}</div>
      <h4>{cat.label}</h4>
      <button className={styles.delete} onClick={() => deleteCategory(cat)}>
        Remove
      </button>
    </div>
  );
};

export default Index;
