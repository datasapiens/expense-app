import React, { FC } from 'react';
import { RootState } from '../store';
import { useAppSelector } from '../store/hooks';
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
  const transactions = useAppSelector((state: RootState) => state.transactions);
  const categories = useAppSelector((state: RootState) => state.categories);

  const data = categories.map(({ id, label }) => {
    const color = getRandomColor();
    const sum = transactions
      .filter((transaction) => transaction.category === id)
      .reduce((acc, transaction) => acc + transaction.amount, 0);

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
              {data.map((bar, i) => {
                return <Cell key={i} fill={bar.color} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default Graphs;
