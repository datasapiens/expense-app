import React, { FC } from 'react';
import CategoryItem from './CategoryItem';
import CategoryAdd from './CategoryAdd';
import { List, Typography } from '@mui/material';
import { CategoryModel } from '../../app/models/category.model';

const Categories: FC<{ categories: CategoryModel[] }> = ({ categories }) => {
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
