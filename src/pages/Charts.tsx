import { ExpenseDistribuitonChart } from '../components/ExpenseDistributionChart/ExpenseDistribuitonChart'
import { BalanceOverviewChart } from '../components/BalanceOverviewChart/BalanceOverviewChart'
import { Helmet } from 'react-helmet-async'
export function Charts() {
  return (
    <>
      <Helmet>
        <title>Charts - Expense App</title>
      </Helmet>
      <ExpenseDistribuitonChart />
      <BalanceOverviewChart />
    </>
  )
}
