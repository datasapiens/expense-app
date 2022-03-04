// import { useState, useEffect } from 'react'

import useTransactions from '../../hooks/useTransactions'
import useCategories from '../../hooks/useCategories'

const TransactionsRow = () => {
  const { transactions } = useTransactions()
  const { categoryFM } = useCategories()

  if (!Array.isArray(transactions)) return null

  const Rows = transactions.map((item, index) => (
    <tr key={item?.id}>
      <td> # {item.id}</td>
      <td>{item?.label}</td>
      <td>{item?.date}</td>
      <td>${item?.amount}</td>
      <td>
        {categoryFM?.[item?.categoryId]}-{item?.categoryId}
      </td>
    </tr>
  ))

  return Rows
}

export default TransactionsRow
