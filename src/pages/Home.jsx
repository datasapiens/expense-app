import { TransactionTable } from '../components/TransactionTable'
import { CategoriesTable } from '../components/CategoriesTable'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <main>
      <h1>Home</h1>

      <TransactionTable />

      <CategoriesTable />
    </main>
  )
}

export default Home
