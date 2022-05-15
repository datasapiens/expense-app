import React, { useEffect } from 'react';
import { Row, Empty, Button, Tag, Popconfirm } from 'antd';

import Category from '../../../types/category';

type CategoriesListProps = {
  categories: Category[];
  removeCategory: (category: Category) => void;
};

const CategoriesList: React.FC<CategoriesListProps> = ({
  categories,
  removeCategory,
}) => {
  const handleRemoveCategoryClick = (e: any, category: Category) => {
    e.preventDefault();
    removeCategory(category);
  };
  return (
    <div>
      {categories.length === 0 && <Empty />}
      {categories.map((category) => (
        <Row key={category.id} justify="start" align="middle">
          {/* <p>{category.label}</p> */}
          {/* <Popconfirm
            placement="top"
            title="Are you sure"
            onConfirm={(e: any) => handleRemoveCategoryClick(e, category)}
          >
            <Button>{category.label}</Button>
          </Popconfirm> */}
            <Tag closable onClose={(e: any) => handleRemoveCategoryClick(e, category)}>
              {category.label}
            </Tag>
        </Row>
      ))}
    </div>
  );
};

CategoriesList.displayName = 'features/Categories/CategoriesList';

export default CategoriesList;
