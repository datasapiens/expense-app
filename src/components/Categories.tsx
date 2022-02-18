import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addCategory, removeCategory } from '../store/categoriesReducer';
import {
  TextField,
  Button,
  List,
  ListItem,
  Grid,
  Typography,
} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Categories = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  const categories = useAppSelector((state) => state.categories);

  const createNewCategory = () => {
    const id = Date.now();
    const category = {
      id,
      label: value,
    };

    dispatch(addCategory(category));

    setValue('');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <Typography variant='h5' component='h5'>
          Categories
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              label='Category'
              variant='outlined'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              style={{ width: '100%' }}
              onClick={() => createNewCategory()}
            >
              Add category
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <List>
          {categories.map((category) => (
            <ListItem
              key={category.id}
              secondaryAction={
                <IconButton
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
      </Grid>
    </Grid>
  );
};

export default Categories;
