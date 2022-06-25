import { useState } from 'react'
import { ListOfTransactions } from './ListOfTransactions/ListOfTransactions'
import { NewTransaction } from './NewTransaction/NewTransaction'

export type Category = {
  id: string
  label: string
}

export type Transaction = {
  id: string
  label: string
  date: string
  amount: number
  category: string
}

export function Home() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 'food', label: 'Food' },
    { id: 'salary', label: 'Salary' },
    { id: 'going-out', label: 'Going out' },
    { id: 'commute', label: 'Commuting' },
  ])

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      label: 'Lunch',
      date: '2022-06-02',
      amount: 1000,
      category: 'salary',
    },
    {
      id: '2',
      label: 'Lunch',
      date: '2022-06-02',
      amount: -10,
      category: 'commute',
    },
    {
      id: '3',
      label: 'Lunch',
      date: '2022-06-03',
      amount: -1,
      category: 'commute',
    },
  ])

  const addNewTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction])
  }

  return (
    <>
      <h1>Home</h1>
      <NewTransaction
        categories={categories}
        addTransaction={addNewTransaction}
      />
      <ListOfTransactions transactions={transactions} />
    </>
  )
}
