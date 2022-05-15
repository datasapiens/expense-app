import React from 'react';
import { Empty } from 'antd';

import Category from '../../../types/category';
import SingleCategory from './Category';

type CategoriesListProps = {
  categories: Category[];
  removeCategory: (category: Category) => void;
};

const CategoriesList: React.FC<CategoriesListProps> = ({
  categories,
  removeCategory,
}) => {
  return (
    <div>
      {categories.length === 0 && <Empty />}

      {categories.length > 0 && (
        <>
          <h3>Categories</h3>
          {categories.map((category) => (
            <span key={category.id}>
              <SingleCategory
                removeCategory={removeCategory}
                category={category}
              />
            </span>
          ))}
        </>
      )}
    </div>
  );
};

CategoriesList.displayName = 'features/Categories/CategoriesList';

export default CategoriesList;
