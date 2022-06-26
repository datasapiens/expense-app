import { TransactionTable } from '../TransactionTable/TransactionTable'
import styles from './transactions.module.scss'

export function ListOfTransactions() {
  return (
    <section className={styles.transactions}>
      <h2>Transactions</h2>
      <div>
        <TransactionTable />
      </div>
    </section>
  )
}
