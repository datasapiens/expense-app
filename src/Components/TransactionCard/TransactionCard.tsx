import { Transaction } from '../Home'
import styles from './transactionCard.module.scss'

export function TransactionCard({
  label,
  date,
  amount,
  category,
}: Transaction) {
  return (
    <div className={styles.card}>
      <div>
        <h1 className={styles.transactionLabel}>{label}</h1>
        <p className={styles.date}>{date}</p>
      </div>
      <div>
        <p className={styles.amount} data-positive={amount > 0}>
          {new Intl.NumberFormat('cs-CZ', {
            localeMatcher: 'best fit',
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'narrowSymbol',
            signDisplay: 'exceptZero',
          }).format(amount)}
        </p>
        <p className={styles.category}>{category}</p>
      </div>
    </div>
  )
}
