import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeCategory } from '../store/categoriesReducer';
import { RootState } from '../store';
import { List, ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CategoriesList:FC = () => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector((state: RootState) => state.categories);

  return (
    <List>
      {categories.map((category, i) => (
        <ListItem
          key={category.id}
          secondaryAction={
            <IconButton
              disabled={i === 0}
              edge='end'
              aria-label='delete'
              onClick={() => dispatch(removeCategory(category.id))}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={category.label} />
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesList;
