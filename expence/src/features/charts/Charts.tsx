import React, { useEffect, useMemo, useState } from 'react';
import { Chart } from 'react-google-charts';
import { useAppDispatch, useAppSelector } from '../../app/hooks/redux';
import { selectTransactions } from '../transactions-page/transactionSlice';
import { selectCategories } from '../categories/categoriesSlice';
import { fetchTransactions } from '../transactions-page/API/transactions.service';
import { fetchCategoriesService } from '../categories/API/categories.service';
import { maxSumByCategory } from './chart.utils';

const Charts = () => {
  const transactions = useAppSelector(selectTransactions);
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const [chartData, setChartData] = useState([] as any[]);

  const convertData = useMemo(() => {
    return maxSumByCategory(transactions, categories);
  }, [transactions, categories]);

  useEffect(() => {
    setChartData(convertData);
  }, [transactions, categories]);

  useEffect(() => {
    if (!categories.length || !transactions.length) {
      fetchTransactions(dispatch);
      fetchCategoriesService(dispatch);
    }
  }, []);

  return (
    <div>
      <Chart chartType="ColumnChart" data={chartData} width="100%" height="400px" legendToggle />
    </div>
  );
};

export default Charts;
