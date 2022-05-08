import dayjs from 'dayjs'

import useTransactions from '../../hooks/useTransactions'
import useCategories from '../../hooks/useCategories'

const TransactionsRow = (): JSX.Element => {
  const { transactions } = useTransactions()
  const { categoryFM } = useCategories()

  if (!Array.isArray(transactions)) return null

  const Rows = transactions.map((item, index) => (
    <tr key={item?.id}>
      <td> # {item.id}</td>
      <td>{item?.label}</td>
      <td>{dayjs(item?.date).format('DD/MM/YYYY')}</td>
      <td>${item?.amount}</td>
      <td>
        {categoryFM?.[item?.categoryId]}-{item?.categoryId}
      </td>
    </tr>
  ))

  return <>{Rows}</>
}

export default TransactionsRow
