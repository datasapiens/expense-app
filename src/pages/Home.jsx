import { TransactionTable } from '../components/TransactionTable'
import { CategoriesTable } from '../components/CategoriesTable'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <TransactionTable />

      <CategoriesTable />
    </div>
  )
}

export default Home
