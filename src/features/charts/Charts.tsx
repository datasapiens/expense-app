import React, { FC, useEffect, useMemo, useState } from 'react';
import { Chart } from 'react-google-charts';
import { useAppDispatch, useAppSelector } from '../../app/hooks/redux';
import { selectTransactions, selectTransactionsLoading } from '../transactions/transactions-page/transactionSlice';
import { selectCategories, selectCategoriesLoading } from '../categories/categoriesSlice';
import { fetchTransactions } from '../transactions/transactions-page/API/transactions.service';
import { fetchCategoriesService } from '../categories/API/categories.service';
import { maxSumByCategory } from './chart.utils';
import { CircularProgress, Container, CssBaseline, Stack } from '@mui/material';

const Charts: FC = () => {
  const transactions = useAppSelector(selectTransactions);
  const categories = useAppSelector(selectCategories);
  const transactionsLoading = useAppSelector(selectTransactionsLoading);
  const categoriesLoading = useAppSelector(selectCategoriesLoading);
  const dispatch = useAppDispatch();
  const [chartData, setChartData] = useState([] as any[]);

  const convertData = useMemo(() => {
    return maxSumByCategory(transactions, categories);
  }, [transactions, categories]);

  useEffect(() => {
    setChartData(convertData);
  }, [transactions, categories, convertData]);

  useEffect(() => {
    if (!categories.length || !transactions.length) {
      fetchTransactions(dispatch);
      fetchCategoriesService(dispatch);
    }
  });

  return (
    <Container component="main" maxWidth="xl" sx={{ py: 2 }}>
      {transactionsLoading || categoriesLoading ? (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      ) : (
        <Chart chartType="ColumnChart" data={chartData} width="100%" height="400px" legendToggle />
      )}
    </Container>
  );
};

export default Charts;
