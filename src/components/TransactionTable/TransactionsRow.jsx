import { useState, useEffect } from 'react'

import useTransactions from '../../hooks/useTransactions'
import useCategories from '../../hooks/useCategories'

const TransactionsRow = () => {
  const { transactions } = useTransactions()
  const { categories } = useCategories()
  const [categoryFlatMap, setCategoryFlatMap] = useState({})

  if (!Array.isArray(transactions)) return null

  useEffect(() => flattenCategories(), [categories])

  // for efficient category lookup
  const flattenCategories = () => {
    let _categoryFlatMap = {}

    // all categories are (or should be) unique
    for (let i = 0; i < categories.length; i++) {
      _categoryFlatMap[categories?.[i]?.id] = categories?.[i]?.label
      // {
      //  '1': Salary
      //  '2': Food
      // }
    }
    setCategoryFlatMap(_categoryFlatMap)
  }

  const Rows = transactions.map((item, index) => (
    <tr key={item?.id}>
      <td> # {item.id}</td>
      <td>{item?.label}</td>
      <td>{item?.date}</td>
      <td>${item?.amount}</td>
      <td>{categoryFlatMap?.[item?.categoryId]}</td>
    </tr>
  ))

  return Rows
}

export default TransactionsRow
