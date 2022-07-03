import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import {
  selectAllCategories,
  selectDefaultCategoryId,
  removeCategory
} from '../../../../store';
import styles from './CategoriesTable.module.scss';
import Button from '../../../../components/Button/Button';
import Category from '../../../../types/category';

const CategoriesTable = () => {
  const categories = useSelector(selectAllCategories);
  const defaultCategoryId = useSelector(selectDefaultCategoryId);

  const dispatch = useDispatch();

  const handleClick = (category: Category) => (event: MouseEvent) => {
    event.preventDefault();
    const result = confirm(
      `Are you sure you want to delete category ${category.label}?`
    );
    if (result) {
      dispatch(removeCategory(category.id));
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Label</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {categories.map(category => (
          <tr key={category.id}>
            <td style={{ color: category.color }}>{category.label}</td>
            <td>
              {defaultCategoryId !== category.id && (
                <Button
                  size="small"
                  variant="secondary"
                  onClick={handleClick(category)}
                  ariaLabel={`Delete ${category.label}`}
                >
                  <FaTrash />
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoriesTable;
