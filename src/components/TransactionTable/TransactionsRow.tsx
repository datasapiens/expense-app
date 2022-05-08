import dayjs from 'dayjs'

import useTransactions from '../../hooks/useTransactions'
import useCategories from '../../hooks/useCategories'

import getFormattedCurrency from '../../utils/formatCurrency'

const TransactionsRow = (): JSX.Element => {
  const { transactions } = useTransactions()
  const { categoryFlatMap } = useCategories()

  if (!Array.isArray(transactions)) return null

  const Rows = transactions.map((item, index) => (
    <tr key={item?.id}>
      <td> # {item.id}</td>
      <td>{item?.label}</td>
      <td>{dayjs(item?.date).format('DD/MM/YYYY')}</td>
      <td>{getFormattedCurrency(item?.amount)}</td>
      <td>
        {categoryFlatMap?.[item?.categoryId]}-{item?.categoryId}
      </td>
    </tr>
  ))

  return <>{Rows}</>
}

export default TransactionsRow
