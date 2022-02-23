import React, { useState, useEffect } from 'react'

import CategoryRow from './CategoryRow'
import styles from './CategoriesTable.module.scss'

const emptyFormState = {
  id: 0,
  label: '',
}

const CategoriesTable = () => {
  const [categories, setCategories] = useState([])
  const [userInput, setUserInput] = useState(emptyFormState) // form data

  // todo: pass data to Redux
  // todo: fix uniqueness bug
  const addCategory = event => {
    // console.log('@addCategory', event, userInput)
    event.preventDefault()

    if (categories.length === 0) setCategories([userInput])

    // check unique id & categories
    for (let i = 0; i < categories.length; i++) {
      if (userInput.id == categories[i].id) {
        console.log('@AddCat - id match', userInput)
        alert('Enter Unique ID')
        break
      } else if (userInput.label == categories[i].label) {
        console.log('@AddCat - label match', userInput)
        alert('Enter Unique Label')
        break
      } else if (userInput.id != categories[i].id && userInput.label != categories[i].label) {
        console.log('@AddCat', userInput)
        // Add transaction to UI (local state)
        setCategories([...categories, userInput])

        // Clear form
        setUserInput(emptyFormState)
      }
    }
  }

  const handleInputChange = event => {
    // if(event.target.value)
    const newUserInput = { ...userInput, [event?.target?.name]: event?.target?.value }
    setUserInput(newUserInput)
  }

  const removeCategory = () => {
    // if category has no transactions yet -> delete
    // if category has transaction -> provide option to merge with another category
  }

  // Last Row on Table
  const TransactionAdditionForm = () => {
    return (
      <tr>
        <td>
          <input
            autoFocus
            key='id'
            type='number'
            name='id'
            value={userInput?.id}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            autoFocus
            key='label'
            type='text'
            name='label'
            value={userInput?.label}
            onChange={handleInputChange}
          />
        </td>

        <td>
          <input key='submit' type='submit' name='Add' value='Add Category ' />
        </td>
      </tr>
    )
  }

  return (
    <section>
      <h2>Categories Table</h2>
      <form onSubmit={addCategory}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            {/* Render Categories */}
            <CategoryRow categories={categories} removeCategory={removeCategory} />

            {/* Transaction addition Form */}
            <TransactionAdditionForm />
          </tbody>
        </table>
      </form>
    </section>
  )
}

export default CategoriesTable
