// outsource dependencies
import _ from 'lodash';
import React, { memo } from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { useControllerData } from 'redux-saga-controller';

// local dependencies
import { ICategory, controller } from '../../controller';

// configure
ChartJS.register(ArcElement, Tooltip, Legend);

export const chartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      align: 'center',
      position: 'top',
      text: 'Total spends by category',
    },
  },
};

export const GraphMostCommonExpensesChart = memo(function GraphMostCommonExpensesChart () {
  const { categories, transactions } = useControllerData(controller);

  const categoryLabels = _.map(categories, (category: ICategory) => category.label);

  const mostSpentDataSet = _.map(categories, (cat: ICategory) => {
    const transactionsByCategory = _.filter(transactions, (transaction) => _.isEqual(cat.id, transaction.category));
    return _.reduce(transactionsByCategory, (acc, { amount }) => {
      return amount <= 0 ? acc+1 : acc
    }, 0);
  });

  const chartData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Most Popular categories',
        data: mostSpentDataSet,
        backgroundColor: [
          'rgba(153, 179, 224, 0.5)',
          'rgba(10, 82, 232, 0.5)',
          'rgba(239, 102, 142, 0.5)',
          'rgba(183, 25, 159, 0.5)',
          'rgba(160, 35, 121, 0.5)',
          'rgba(179, 18, 104, 0.5)',
          'rgba(137, 102, 142, 0.5)',
          'rgba(137, 230, 57, 0.5)',
          'rgba(31, 202, 86, 0.5)',
          'rgba(84, 155, 128, 0.5)',
        ],
        borderColor: [
          'rgba(153, 179, 224, 1)',
          'rgba(10, 82, 232, 1)',
          'rgba(239, 102, 142, 1)',
          'rgba(183, 25, 159, 1)',
          'rgba(160, 35, 121, 1)',
          'rgba(179, 18, 104, 1)',
          'rgba(137, 102, 142, 1)',
          'rgba(137, 230, 57, 1)',
          'rgba(31, 202, 86, 1)',
          'rgba(84, 155, 128, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (<>
    <Pie data={chartData}
         options={chartOptions}
    />
  </>);
});
