import React from 'react'
import { Container, Grid } from '@mui/material'
import CategoriesForm from '../Categories/components/CategoriesForm'
import TransactionForm from '../Transactions/components/TransactionsForm'
import Categories from '../Categories'
import Transactions from '../Transactions'

/**
 * Renders the home view
 */
const Home = () => (
  <Container className='container' maxWidth='xl'>
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <CategoriesForm />
      </Grid>
      <Grid item xs={6}>
        <TransactionForm />
      </Grid>
      <Grid item xs={6}>
        <Categories />
      </Grid>
      <Grid item xs={6}>
        <Transactions />
      </Grid>
    </Grid>
  </Container>
)

export default Home
