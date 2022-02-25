import useTransactions from '../../hooks/useTransactions'

const TransactionsRow = () => {
  const { transactions } = useTransactions()

  if (!Array.isArray(transactions)) return null

  const Rows = transactions.map((item, index) => (
    <tr key={item?.id}>
      <td> # {item.id}</td>
      <td>{item?.label}</td>
      <td>{item?.date}</td>
      <td>${item?.amount}</td>
      <td>{item?.category}</td>
    </tr>
  ))

  return Rows
}

export default TransactionsRow
