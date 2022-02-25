import React, { useState, useEffect } from 'react'

import styles from './TransactionTable.module.scss'

import TransactionAdditionForm from './TransactionAdditionForm'
import TransactionsJSON from './Transactions.json'

const emptyFormState = {
  id: '',
  label: '',
  date: new Date().toLocaleString(),
  amount: '',
  category: '',
}

const TransactionTable = ({ categories, transactions, setTransactions }) => {
  const [userInput, setUserInput] = useState(emptyFormState) // form data

  useEffect(() => {
    setTransactions(TransactionsJSON)
  }, [])

  // todo: pass data to Redux
  const addTransaction = event => {
    console.log('@addTransaction', userInput, transactions)
    event.preventDefault()

    // Add transaction to UI (local state)
    setTransactions([...transactions, userInput])

    // Clear form
    setUserInput(emptyFormState)
  }

  const handleInputChange = event => {
    // if(event.target.value)
    const newUserInput = { ...userInput, [event?.target?.name]: event?.target?.value }
    setUserInput(newUserInput)
  }

  // ROW component
  const Row = ({ id, label, date, amount, category }) => {
    return (
      <tr>
        <td>{id}</td>
        <td>{label}</td>
        <td>{date}</td>
        <td>{amount}</td>
        <td>{category}</td>
      </tr>
    )
  }

  return (
    <section>
      <h2>Transactions Table</h2>
      <form onSubmit={addTransaction}>
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
            {Array.isArray(transactions)
              ? transactions.map((item, index) => {
                  return (
                    <Row
                      key={index}
                      id={item?.id}
                      label={item?.label}
                      date={item?.date}
                      amount={item?.amount}
                      category={item?.category}
                    />
                  )
                })
              : null}

            {/* Transaction addition Form */}
            <TransactionAdditionForm
              transactions={transactions}
              userInput={userInput}
              categories={categories}
              handleInputChange={handleInputChange}
              addTransaction={addTransaction}
            />
          </tbody>
        </table>
      </form>
    </section>
  )
}

export default TransactionTable
