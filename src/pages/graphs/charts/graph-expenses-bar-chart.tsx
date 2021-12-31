// outsource dependencies
import _ from 'lodash';
import React, { memo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useControllerData } from 'redux-saga-controller';
import {
  Title,
  Legend,
  Tooltip,
  BarElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ChartOptions,
} from 'chart.js';


// local dependencies
import { ICategory, controller } from '../../controller';

// configure
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Income/Outcome By Category',
    },
  },
};

export const GraphExpensesBarChart = memo(function GraphExpensesBarChart () {
  const { categories, transactions } = useControllerData(controller);

  const categoryLabels = _.map(categories, (category: ICategory) => category.label);

  const incomeDataSet = _.map(categories, (cat: ICategory) => {
    const transactionsByCategory = _.filter(transactions, (transaction) => _.isEqual(cat.id, transaction.category) && transaction.amount > 0);
    return _.reduce(transactionsByCategory, (acc, { amount }) => acc + amount, 0);
  });

  const outcomeDataSet = _.map(categories, (cat: ICategory) => {
    const transactionsByCategory = _.filter(transactions, (transaction) => _.isEqual(cat.id, transaction.category) && transaction.amount < 0);
    return _.reduce(transactionsByCategory, (acc, { amount }) => acc + amount, 0);
  });

  const chartData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Outcome',
        data: outcomeDataSet,
        backgroundColor: 'rgba(179, 18, 104, 0.5)',
        borderColor: 'rgba(179, 18, 104, 1)'
      },
      {
        label: 'Income',
        data: incomeDataSet,
        backgroundColor: 'rgba(137, 230, 57, 0.5)',
        borderColor: 'rgba(31, 202, 86, 1)',
      },
    ],
  };

  return (<>
    <Bar options={options} data={chartData} />
  </>);
});
