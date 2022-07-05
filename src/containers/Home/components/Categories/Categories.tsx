import { useAppDispatch, useAppSelector } from "app/hooks";
import { Card } from "components/Card/Card";
import { Tag } from "components/Tag/Tag";
import { addCategory, removeCategory, selectCategories } from "features/categories/categoriesSlice";
import { AddCategory } from "../AddCategory/AddCategory";
import styles from "./Categories.module.scss";

const getConfirmCloseMessage = (label: string) =>
  `Do you really want to remove the category '${label}?'\nAll transactions in this category will be moved to 'No Category'.`;

export const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(selectCategories);

  const onAdd = (value: string) => {
    const isNotEmpty = value !== "";
    const isNotDuplicate = categories.every(({ label }) => label !== value);

    if (isNotEmpty && isNotDuplicate) {
      dispatch(addCategory(value));
      return true;
    }

    return false;
  };

  return (
    <div className={styles.categoriesCard}>
      <Card title="Categories">
        <div className={styles.categoriesTagContainer}>
          {categories.map(({ id, label }) => {
            const onTagClose = () => {
              window.confirm(getConfirmCloseMessage(label)) && dispatch(removeCategory(id));
            };

            return <Tag key={id} label={label} onClose={onTagClose} />;
          })}
          <AddCategory placeholder="New Category..." onAdd={onAdd} />
        </div>
      </Card>
    </div>
  );
};
