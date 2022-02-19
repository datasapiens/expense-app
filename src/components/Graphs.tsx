import React, { FC } from 'react';
import { useAppSelector } from '../store/hooks';
import { categoriesSelector } from '../store/slices/categories/slice';
import { transactionSelector } from '../store/slices/transactions/slice';
import { getRandomColor } from '../utils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { Grid, Typography } from '@mui/material';

const Graphs: FC = () => {
  const { data: transactions } = useAppSelector(transactionSelector);
  const { data: categories } = useAppSelector(categoriesSelector);

  const data = categories.map(({ id, label }) => {
    const color = getRandomColor();
    const sum = transactions
      .filter((transaction) => transaction.category === id)
      .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

    return {
      id,
      label,
      sum,
      color,
    };
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h5' component='h5' align='center'>
          Analytics
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ResponsiveContainer width='100%' height={500}>
          <BarChart width={150} height={40} data={data}>
            <XAxis dataKey='label' />
            <YAxis />
            <Tooltip />
            <ReferenceLine y={0} stroke='#000' />
            <CartesianGrid strokeDasharray='5 5' />
            <Bar dataKey='sum' fill='#1976d2'>
              {data.map(({ color }, i) => (
                <Cell key={i} fill={color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default Graphs;
