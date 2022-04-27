import { useState } from 'react';
import { AddCategoryForm } from 'modules/Category/AddCategoryForm';
import type { Category } from 'types/Category';
import { Button } from 'components/UI/Button';
import { useDispatch } from 'hooks/useDispatch';
import { deleteCategory } from 'store/category/actions';
import { CategoryItemPill } from 'modules/Category/CategoryItemPill';
import './CategorySection.scss';

type AddCategoryFormProps = {
  categories: Category[];
};

export const CategorySection: React.FC<AddCategoryFormProps> = ({
  categories,
}) => {
  const dispatch = useDispatch();

  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const toggleIsAddingCategory = () => {
    setIsAddingCategory(!isAddingCategory);
  };

  const onDismissClick = (category: Category) => {
    const prompt = confirm(
      `Are you sure you want to delete ${category.label} category?. It will also delete all transaction associated with "${category.label}". This action cannot be undone.`,
    );

    if (prompt) {
      dispatch(deleteCategory(category));
    }
  };

  return (
    <div className="category-section">
      <h3 className="category-section__title">Categories</h3>

      <div>
        {categories.map((category) => (
          <CategoryItemPill
            onDismissClick={onDismissClick}
            key={category.id}
            category={category}
          />
        ))}
      </div>

      {isAddingCategory && <AddCategoryForm />}
      <Button onClick={toggleIsAddingCategory} variant="secondary">
        {isAddingCategory ? 'Cancel' : 'Add category'}
      </Button>
    </div>
  );
};
