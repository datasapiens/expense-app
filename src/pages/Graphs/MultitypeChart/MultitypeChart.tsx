import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip,
  BarController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectAllTransactions } from '../../../store';
import { MONTHS } from '../../../constants';
import Card from '../../../components/Card/Card';
import styles from './MultitypeChart.module.scss';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip,
  BarController
);

const MultitypeChart = () => {
  const transactions = useSelector(selectAllTransactions);

  const sums = transactions.reduce(
    (acc, item) => {
      const index = new Date(item.date).getMonth();
      acc.balance[index] += item.amount;
      if (item.amount > 0) {
        acc.income[index] += item.amount;
      } else {
        acc.expenses[index] += item.amount;
      }

      return acc;
    },
    {
      balance: [...Array(12)].map(x => 0),
      income: [...Array(12)].map(x => 0),
      expenses: [...Array(12)].map(x => 0)
    }
  );

  const data = {
    labels: MONTHS,
    datasets: [
      {
        type: 'line' as const,
        label: 'Balance',
        backgroundColor: '#000000',
        fill: false,
        data: sums.balance
      },
      {
        type: 'bar' as const,
        label: 'Income',
        backgroundColor: '#198754',
        data: sums.income
      },
      {
        type: 'bar' as const,
        label: 'Expenses',
        backgroundColor: '#dc3545',
        data: sums.expenses
      }
    ]
  };

  return (
    <Card header="Multitype Chart">
      <div className={styles.chart}>
        <Chart type="bar" data={data} />
      </div>
    </Card>
  );
};

export default MultitypeChart;
