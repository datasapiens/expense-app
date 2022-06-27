import { CategoryManagement } from '../components/CategoryManagement/CategoryManagement'
import { ListOfTransactions } from '../components/Transactions/Transactions'
import { NewTransaction } from '../components/NewTransaction/NewTransaction'
import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Expense App</title>
      </Helmet>

      <NewTransaction />
      <CategoryManagement />
      <ListOfTransactions />
    </>
  )
}
