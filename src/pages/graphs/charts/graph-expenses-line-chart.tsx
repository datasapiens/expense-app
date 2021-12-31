// outsource dependencies
import _ from 'lodash';
import React, { memo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title, ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useControllerData } from 'redux-saga-controller';

// local dependencies
import { ICategory, controller } from '../../controller';

// configure
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Income/Outcome Chart',
    },
  },
};

export const GraphExpensesLineChart = memo(function GraphExpensesChart () {
  const { categories, transactions } = useControllerData(controller);

  const categoryLabels = _.map(categories, (category: ICategory) => category.label);

  const dataSet = _.map(categories, (cat: ICategory) => {
    const transactionsByCategory = _.filter(transactions, (transaction) => _.isEqual(cat.id, transaction.category));
    return _.reduce(transactionsByCategory, (acc, { amount }) => {
      return acc + amount
    }, 0);
  });

  const chartData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Amount',
        data: dataSet,
        backgroundColor: 'rgba(179, 18, 104, 0.5)',
        borderColor: 'rgba(179, 18, 104, 1)'
      },
    ],
  };

  return (<>
    <Line
      data={chartData}
      options={options}
    />
  </>);
});
