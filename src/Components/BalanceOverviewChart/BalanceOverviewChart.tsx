import { useStore } from '../../app/store'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import autocolors from 'chartjs-plugin-autocolors'
import { Bar } from 'react-chartjs-2'
import styles from '../../styles/common/chartCard.module.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  autocolors
)

export function BalanceOverviewChart() {
  const { transactions, categories } = useStore()

  const data = {
    labels: ['Expenses', 'Incomes'],
    datasets: categories.map((category) => ({
      label: category.label,
      data: [
        Math.abs(
          transactions
            .filter(
              (transaction) =>
                transaction.category === category.id && transaction.amount < 0
            )
            .map((transaction) => transaction.amount)
            .reduce((prev, curr) => prev + curr, 0)
        ),
        transactions
          .filter(
            (transaction) =>
              transaction.category === category.id && transaction.amount > 0
          )
          .map((transaction) => transaction.amount)
          .reduce((prev, curr) => prev + curr, 0),
      ],
    })),
  }

  const options = {
    plugins: {
      autocolors: {
        mode: 'data',
      },
      legend: {
        position: 'right' as 'right',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value: string | number) => {
            return value + ' €'
          },
        },
      },
    },
  }

  return (
    <section className={styles.chartCard}>
      <h2>Balance overview</h2>
      <div className={styles.chartContainer}>
        <Bar options={options} data={data} />;
      </div>
    </section>
  )
}
