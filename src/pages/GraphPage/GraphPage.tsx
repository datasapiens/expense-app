import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'hooks/useSelector';
import { selectCategory, selectTransaction } from 'store/selectors';
import { AppLayout } from 'components/layouts/AppLayout';
import './GraphPage.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const calculatePercentage = (total: number, amount: number): number => {
  return Math.abs(amount / total) * 100;
};

export const GraphPage: React.FC = () => {
  const category = useSelector(selectCategory);
  const transaction = useSelector(selectTransaction);

  const allTransactions = transaction.transactions.allIds.map(
    (id) => transaction.transactions.byId[id],
  );

  const allCategories = category.allIds.map((id) => category.byId[id]);

  const mergedTransactions = allTransactions.map((transaction) => ({
    ...transaction,
    category: allCategories.find(
      (category) => category?.id === transaction?.category,
    ),
  }));

  //
  const expenses = mergedTransactions.filter((item) => item.amount < 0);
  const incomes = mergedTransactions.filter((item) => item.amount > 0);

  const expensesTotal = expenses.reduce((acc, item) => acc + item.amount, 0);
  const incomesTotal = incomes.reduce((acc, item) => acc + item.amount, 0);

  const expensesPercentage = calculatePercentage(
    expensesTotal + incomesTotal,
    expensesTotal,
  );

  const incomesPercentage = calculatePercentage(
    expensesTotal + incomesTotal,
    incomesTotal,
  );

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Incomes/Expenses',
        data: [incomesPercentage, expensesPercentage],
        backgroundColor: ['#44b3a0', '#cb5757'],
        borderColor: ['#1c796a', '#a83535'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <AppLayout className="graph-page">
      <div className="graph-page__graph">
        <Pie
          data={data}
          style={{ width: '100%' }}
          options={{
            maintainAspectRatio: true,
            responsive: false,
          }}
        />
      </div>
    </AppLayout>
  );
};
