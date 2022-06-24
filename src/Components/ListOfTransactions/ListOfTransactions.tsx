import { Transaction } from '../Home'
import { TransactionCard } from '../TransactionCard/TransactionCard'

type Props = {
  transactions: Transaction[]
}

export function ListOfTransactions({ transactions }: Props) {
  return (
    <div>
      <h2>List of transactions</h2>
      {transactions.map((transaction) => (
        <TransactionCard {...transaction} key={transaction.id} />
      ))}
    </div>
  )
}
