import React, { useState, useEffect } from 'react'

import CategoryRow from './CategoryRow'
import CategoryAdditionForm from './CategoryAdditionForm'
import styles from './CategoriesTable.module.scss'

const emptyFormState = {
  id: 0, // autoIncrement
  label: '',
}

const CategoriesTable = ({ categories, setCategories }) => {
  const [userInput, setUserInput] = useState(emptyFormState) // form data

  useEffect(() => {
    resetForm()
  }, [categories])

  const resetForm = () => {
    // factor in prepopulated values to autogenerate ID
    if (categories.length > 0) {
      setUserInput({ ...emptyFormState, id: categories.at(-1)?.id + 1 })
    } else setUserInput(emptyFormState)
  }

  // todo: pass data to Redux
  const addCategory = event => {
    // console.log('@addCategory', event, userInput, categories)
    event.preventDefault()

    if (categories.length === 0) setCategories([userInput])

    let idExists = false
    let labelExists = false

    // check unique id & categories
    for (let i = 0; i < categories.length; i++) {
      if (userInput.id === categories[i].id) {
        console.log('@AddCat - id match', userInput)
        idExists = true
        resetForm()
        alert('Enter Unique ID')
        break
      } else if (userInput.label === categories[i].label) {
        console.log('@AddCat - label match', userInput)
        labelExists = true
        resetForm()
        alert('Enter Unique Label')
        break
      }
    }

    // safe insertion after finishing the loop
    if (!idExists && !labelExists) {
      console.log('@AddCat - adding', userInput)
      // Add transaction to UI (local state)
      setCategories([...categories, userInput])

      // Reset form
      resetForm()
    }
  }

  const handleInputChange = event => {
    // if(event.target.value)
    const newUserInput = { ...userInput, [event?.target?.name]: event?.target?.value }
    setUserInput(newUserInput)
  }

  const removeCategory = () => {
    console.log('@removeCategory')
    // if category has no transactions yet -> delete
    // if category has transaction -> provide option to merge with another category
  }

  return (
    <section>
      <h2>Categories Table</h2>
      <form>
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
            <CategoryAdditionForm
              categories={categories}
              userInput={userInput}
              handleInputChange={handleInputChange}
              addCategory={addCategory}
            />
          </tbody>
        </table>
      </form>
    </section>
  )
}

export default CategoriesTable
