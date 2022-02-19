import React, { FC } from 'react';
import { Grid } from '@mui/material';
import TransactionForm from './TransactionForm';
import TransactionsDataGrid from './TransactionsDataGrid';

const Transactions:FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <TransactionForm />
    </Grid>
    <Grid item xs={12}>
      <TransactionsDataGrid />
    </Grid>
  </Grid>
);

export default Transactions;
