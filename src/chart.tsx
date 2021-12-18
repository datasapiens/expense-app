import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from './store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Transaction Graph',
    },
  },
};



export function TransactionsChart() {
  const transactions = useSelector((state: RootState) => state.transactions.transaction);

  const labels: string[] = transactions.map((items) => items.label);
  const amount: number[] = transactions.map((item) => parseInt(item.amount))

  const data = {
    labels,
    datasets: [
      {
        label: 'Transactions',
        data: amount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  return <Line options={options} data={data} />;
}
