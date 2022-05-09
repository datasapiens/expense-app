import React, { FC } from 'react';
import { CategoryModel } from '../../app/models/category.model';
import { Button, ListItem, ListItemText } from '@mui/material';
import { useAppDispatch } from '../../app/hooks/redux';
import { removeCategory } from './categoriesSlice';

const CategoryItem: FC<{ category: CategoryModel }> = ({ category }) => {
  const dispatch = useAppDispatch();
  return (
    <ListItem>
      <ListItemText primary={category.label} />
      <Button onClick={() => dispatch(removeCategory(category))}>Delete</Button>
    </ListItem>
  );
};

export default CategoryItem;
