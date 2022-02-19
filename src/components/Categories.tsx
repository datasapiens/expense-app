import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import CategoriesForm from './CategoriesForm';
import CategoriesList from './CategoriesList';

const Categories:FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant='h5' component='h5'>
        Categories
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <CategoriesForm />
    </Grid>
    <Grid item xs={12}>
      <CategoriesList />
    </Grid>
  </Grid>
);

export default Categories;
