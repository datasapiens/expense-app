import React, { useState, useEffect } from 'react'

import styles from './Home.module.scss'

import { TransactionTable } from '../components/TransactionTable'
import { CategoriesTable } from '../components/CategoriesTable'

const PREDEFINED_CAT = [
  {
    id: 1, // autoIncrement
    label: 'Salary',
  },
  {
    id: 2,
    label: 'Food',
  },
  {
    id: 3,
    label: 'Entertainment',
  },
]

const Home = () => {
  const [transactions, setTransactions] = useState([])
  const [categories, setCategories] = useState(PREDEFINED_CAT)

  return (
    <div>
      <h1>Home</h1>

      <TransactionTable
        categories={categories}
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <CategoriesTable categories={categories} setCategories={setCategories} />
    </div>
  )
}

export default Home
