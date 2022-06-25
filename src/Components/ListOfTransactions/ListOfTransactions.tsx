import { useStore } from '../../app/store'
import { TransactionCard } from '../TransactionCard/TransactionCard'

export function ListOfTransactions() {
  const { transactions } = useStore().transactions

  return (
    <div>
      <h2>List of transactions</h2>
      {transactions.map((transaction) => (
        <TransactionCard {...transaction} key={transaction.id} />
      ))}
    </div>
  )
}
