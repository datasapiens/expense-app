import { Button } from 'components/UI/Button';
import { Category } from 'types/Category';
import './CategoryItemPill.scss';

type CategoryItemPillProps = {
  category: Category;
  onDismissClick: (category: Category) => void;
};

export const CategoryItemPill: React.FC<CategoryItemPillProps> = ({
  category,
  onDismissClick,
}) => {
  return (
    <div className="category-item-pill__wrapper">
      <div className="category-item-pill">
        <p className="category-item-pill__label">{category.label}</p>
        <Button
          className="category-item-pill__dismiss-button"
          variant="tertiary"
          title={`Delete ${category.label} category`}
          onClick={() => onDismissClick(category)}
        >
          X
        </Button>
      </div>
    </div>
  );
};

export default CategoryItemPill;
