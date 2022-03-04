import { useState, useEffect } from 'react'

import TransactionsRow from './TransactionsRow'
import TransactionAdditionForm from './TransactionAdditionForm'
import useTransactions from '../../hooks/useTransactions'
import useCategories from '../../hooks/useCategories'

import styles from './TransactionTable.module.scss'

const emptyFormState = {
  id: '',
  label: '',
  date: new Date().toLocaleString(),
  amount: '',
  category: '',
}

const TransactionTable = () => {
  const { transactions, addTransaction } = useTransactions() // from global store
  const { categories } = useCategories() // from global store
  const [userInput, setUserInput] = useState(emptyFormState) // controlled form data

  useEffect(() => resetForm(), [transactions])

  // ------------------------ TABLE METHODS ------------------------

  const handleInputChange = event => {
    const newUserInput = { ...userInput, [event?.target?.name]: event?.target?.value }
    setUserInput(newUserInput)
  }

  const handleFormSubmission = () => {
    addTransaction(userInput) // to globalStore
  }

  const resetForm = () => {
    // factor in any previous values to autogenerate ID
    if (transactions.length > 0) {
      setUserInput({ ...emptyFormState, id: transactions.at(-1)?.id + 1 })
    } else setUserInput(emptyFormState)
  }

  // ------------------------ JSX RENDERING ------------------------

  return (
    <section>
      <h2>Transactions Table</h2>
      <form onSubmit={handleFormSubmission}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Label</th>
              <th>Date (dd/mm/yyyy)</th>
              <th>Amount ($)</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {/* Render Transactions */}
            <TransactionsRow />

            {/* Transaction addition Form */}
            <TransactionAdditionForm
              userInput={userInput}
              handleInputChange={handleInputChange}
              handleFormSubmission={handleFormSubmission}
            />
          </tbody>
        </table>
      </form>
    </section>
  )
}

export default TransactionTable
