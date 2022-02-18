import React from 'react';
import {
  Chart,
  PieSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Palette } from '@devexpress/dx-react-chart';
import { schemePastel2 } from 'd3-scale-chromatic';
import { useAppSelector } from '../store/hooks';

const Graphs = () => {
  const transactions = useAppSelector((state) => state.transactions);

  const data = transactions.map((transaction) => ({
    category: transaction.label,
    val: transaction.amount,
  }));

  return (
    <Chart data={data}>
      <Palette scheme={schemePastel2} />
      <PieSeries valueField='val' argumentField='category' />
      <Legend />
      <Title text='Graph' />
    </Chart>
  );
};

export default Graphs;
