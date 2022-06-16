import * as React from 'react'
import { useAppSelector } from '../../store'
import { Grid, Paper, Typography } from '@mui/material'
import CategoriesTable, { CATEGORIES_HEADERS } from './components/CategoriesTable'
import { categoriesSelector } from '../../store/reducers/categories.reducer'

/**
 * Renders a simple categories table
 */
const Categories = () => {
  const categories = useAppSelector(categoriesSelector)

  return (
    <Paper elevation={2}>
      <Grid container p={3} direction='column'>
        <Grid item xs>
          <Typography component='h1' variant='h4' align='left' mb={2}>
            Categories
          </Typography>
        </Grid>
      </Grid>
      <CategoriesTable rows={categories} headers={CATEGORIES_HEADERS} />
    </Paper>
  )
}

export default Categories
