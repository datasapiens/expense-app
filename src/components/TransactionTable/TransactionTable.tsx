import { useState, useEffect } from 'react'

import TransactionsRow from './TransactionsRow'
import TransactionAdditionForm from './TransactionAdditionForm'
import useTransactions from '../../hooks/useTransactions'

import styles from './TransactionTable.module.scss'

import { Transaction } from '../../store/reducers/transactions'

const emptyFormState: Transaction = {
  id: 0,
  label: '',
  date: new Date().toISOString().slice(0, 10),
  amount: 0,
  categoryId: 0,
}

const TransactionTable = () => {
  const { transactions, addTransaction } = useTransactions() // from global store
  const [userInput, setUserInput] = useState<Transaction>(emptyFormState) // controlled form data

  useEffect(() => resetForm(), [transactions])

  // ------------------------ TABLE METHODS ------------------------

  const handleInputChange = event => {
    const key = event?.target?.name
    const value = event?.target.value
    // const value = // could be better
    //   key === 'amount' || key === 'categoryId'
    //     ? parseInt(event?.target?.value)
    //     : event?.target.value;

    const newUserInput = { ...userInput, [key]: value }
    // console.log('@handleInputChange', newUserInput);
    setUserInput(newUserInput)
  }

  const handleFormSubmission = () => {
    // console.log('@handleFormSubmission', userInput);
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
          <thead className={styles.thead}>
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
