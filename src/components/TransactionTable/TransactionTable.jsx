import React, { useState, useEffect } from 'react'

import styles from './TransactionTable.module.scss'

const emptyFormState = {
  id: 0,
  label: '',
  date: new Date(),
  amount: 0,
  category: '',
}

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([])
  const [userInput, setUserInput] = useState(emptyFormState) // form data

  // todo: pass data to Redux
  const addTransaction = event => {
    // console.log('@addTransaction', event, userInput)
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
  // todo: extract component
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

  // Last Row on Table
  const TransactionAdditionForm = () => {
    return (
      <tr>
        <td>
          <input type='number' name='id' value={userInput?.id} onChange={handleInputChange} />
        </td>
        <td>
          <input type='text' name='label' value={userInput?.label} onChange={handleInputChange} />
        </td>
        <td>
          <input type='date' name='date' value={userInput?.date} onChange={handleInputChange} />
        </td>
        <td>
          <input
            type='number'
            name='amount'
            value={userInput?.amount}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <select
            name='category'
            id='category-select'
            value={userInput?.category}
            onChange={handleInputChange}>
            <option value=''>--Please choose an option--</option>
            <option value='dog'>Dog</option>
            <option value='cat'>Cat</option>
            <option value='hamster'>Hamster</option>
          </select>
        </td>

        <td>
          <input type='submit' name='Add' value='Add Transaction' />
        </td>
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
                      addTransaction={addTransaction}
                    />
                  )
                })
              : null}

            {/* Transaction addition Form */}
            <TransactionAdditionForm />
          </tbody>
        </table>
      </form>
    </section>
  )
}

export default TransactionTable
