import { useStore } from '../../app/store'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import styles from '../../styles/common/chartCard.module.scss'
import autocolors from 'chartjs-plugin-autocolors'

ChartJS.register(ArcElement, Tooltip, Legend, autocolors)

export function ExpenseDistribuitonChart() {
  const { transactions, categories } = useStore()

  const categoryLabels = categories.map((category) => category.label)

  const categoryValues = categories.map((category) =>
    transactions
      .filter(
        (transaction) =>
          transaction.category === category.id && transaction.amount < 0
      )
      .map((transaction) => transaction.amount)
      .reduce((prev, curr) => prev + curr, 0)
  )

  const data = {
    labels: categoryLabels,
    datasets: [
      {
        data: categoryValues,
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      autocolors: {
        mode: 'data',
      },
      legend: {
        position: 'right' as 'right',
      },
    },
  }

  return (
    <section className={styles.chartCard}>
      <h2>Distribution of expenses</h2>
      <div className={styles.chartContainer}>
        <Pie data={data} options={options} />
      </div>
    </section>
  )
}
