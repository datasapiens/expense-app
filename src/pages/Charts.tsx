import { PieChart } from '../components/DistributionOfExpenses/DistributionOfExpenses'
import { BalanceOverview } from '../components/BalanceOverview/BalanceOverview'
import { Helmet } from 'react-helmet-async'
export function Charts() {
  return (
    <>
      <Helmet>
        <title>Charts - Expense App</title>
      </Helmet>
      <PieChart />
      <BalanceOverview />
    </>
  )
}
