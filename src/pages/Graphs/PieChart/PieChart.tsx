import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectAllCategories, selectAllTransactions } from '../../../store';
import Card from '../../../components/Card/Card';
import styles from './PieChart.module.scss';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    autocolors: {
      mode: 'data'
    },
    legend: {
      position: 'right' as const
    }
  }
};

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (): JSX.Element => {
  const categories = useSelector(selectAllCategories);
  const transactions = useSelector(selectAllTransactions);

  const transactionsDict = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, item) => {
      return {
        ...acc,
        [item.categoryId]: (acc[item.categoryId] ?? 0) + item.amount
      };
    }, {} as { [key: string]: number });

  const data = {
    labels: categories.map(c => c.label),
    datasets: [
      {
        data: categories.map(c => transactionsDict[c.id]),
        backgroundColor: categories.map(c => c.color)
      }
    ]
  };

  return (
    <Card header="Pie Chart">
      <div className={styles.chart}>
        <Pie options={options} data={data} />
      </div>
    </Card>
  );
};

export default PieChart;
