import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  categoriesSelector,
  removeCategory,
} from '../store/slices/categories/slice';
import { ListItemText, IconButton, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CategoriesList: FC = () => {
  const dispatch = useAppDispatch();

  const { data: categories } = useAppSelector(categoriesSelector);

  return (
    <List>
      {categories?.map(({ id, label }, i) => (
        <ListItem
          key={id}
          secondaryAction={
            <IconButton
              disabled={i === 0}
              edge='end'
              aria-label='delete'
              onClick={() => dispatch(removeCategory(id))}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesList;
