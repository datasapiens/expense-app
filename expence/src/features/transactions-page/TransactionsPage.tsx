import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks/redux';

import { selectTransactions, selectTransactionsLoading } from './transactionSlice';
import TransactionEdit from '../transaction-edit/transactionEdit';
import Categories from '../categories/Categories';
import { selectCategories, selectCategoriesLoading } from '../categories/categoriesSlice';
import TransactionsList from '../transactions-list/TransactionsList';
import { fetchTransactions } from './API/transactions.service';
import { CircularProgress, Container, CssBaseline, Grid, Paper, Stack, styled } from '@mui/material';
import { fetchCategoriesService } from '../categories/API/categories.service';

const TransactionsPage: FC = () => {
  const transactions = useAppSelector(selectTransactions);
  const transactionsLoading = useAppSelector(selectTransactionsLoading);
  const categories = useAppSelector(selectCategories);
  const categoriesLoading = useAppSelector(selectCategoriesLoading);
  const dispatch = useAppDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    if (!categories.length || !transactions.length) {
      fetchTransactions(dispatch);
      fetchCategoriesService(dispatch);
    }
  }, []);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Container sx={{ py: 2 }} maxWidth="lg">
          <Grid container spacing={4} sx={{ display: 'flex' }}>
            <Grid item xs={6}>
              <Item>{<TransactionEdit categories={categories} />}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>{categoriesLoading ? <CircularProgress /> : <Categories />}</Item>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {transactionsLoading ? (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      ) : (
        <TransactionsList transactions={transactions} categories={categories} />
      )}
    </>
  );
};

export default TransactionsPage;
