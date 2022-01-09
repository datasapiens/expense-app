import React from 'react';
import { useAppSelector } from '../../app/hooks/redux';
import { selectCategories } from './categoriesSlice';
import CategoryItem from './CategoryItem';
import CategoryAdd from './CategoryAdd';
import { List, Typography } from '@mui/material';

const Categories = () => {
  const categories = useAppSelector(selectCategories);

  return (
    <div>
      <Typography component="h1" variant="h5">
        Categories list
      </Typography>
      <List>
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </List>
      <CategoryAdd />
    </div>
  );
};

export default Categories;
