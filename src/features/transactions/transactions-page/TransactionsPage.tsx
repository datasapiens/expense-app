import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/redux';

import { selectTransactions, selectTransactionsLoading } from './transactionSlice';
import { selectCategories, selectCategoriesLoading } from '../../categories/categoriesSlice';
import { fetchTransactions } from './API/transactions.service';
import { CircularProgress, Container, CssBaseline, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import { fetchCategories } from '../../categories/API/categories.service';

const TransactionEdit = React.lazy(() => import('../transaction-edit/transactionEdit'));
const Categories = React.lazy(() => import('../../categories/Categories'));
const TransactionsList = React.lazy(() => import('../transactions-list/TransactionsList'));

const TransactionsPage: FC = () => {
  const transactions = useAppSelector(selectTransactions);
  const categories = useAppSelector(selectCategories);
  const transactionsLoading = useAppSelector(selectTransactionsLoading);
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
      dispatch(fetchTransactions());
      dispatch(fetchCategories());
    }
  }, []);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Container sx={{ py: 2 }} maxWidth="lg">
          <Grid container spacing={4} sx={{ display: 'flex' }}>
            <Grid item xs={6}>
              <Item>
                <React.Suspense fallback={<>...</>}>
                  <TransactionEdit categories={categories} />
                </React.Suspense>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                {categoriesLoading ? (
                  <CircularProgress />
                ) : (
                  <React.Suspense fallback={<>...</>}>
                    <Categories categories={categories} />
                  </React.Suspense>
                )}
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {transactionsLoading ? (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      ) : transactions.length ? (
        <React.Suspense fallback={<>...</>}>
          <TransactionsList transactions={transactions} categories={categories} />
        </React.Suspense>
      ) : (
        <Typography component="h1" variant="h5" align="center">
          No transactions yet
        </Typography>
      )}
    </>
  );
};

export default TransactionsPage;
