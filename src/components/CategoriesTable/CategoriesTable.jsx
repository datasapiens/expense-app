import { useState, useEffect } from 'react'

import CategoryRow from './CategoryRow'
import CategoryAdditionForm from './CategoryAdditionForm'
import styles from './CategoriesTable.module.scss'

import useCategories from '../../hooks/useCategories'

const emptyFormState = {
  id: 0, // autoIncrement
  label: '',
}

const CategoriesTable = () => {
  const { categories, addCategory } = useCategories() // from global store
  const [userInput, setUserInput] = useState(emptyFormState) // controlled form data

  useEffect(() => resetForm(), [categories])

  // ------------------------ TABLE METHODS ------------------------

  const handleInputChange = event => {
    const newUserInput = { ...userInput, [event?.target?.name]: event?.target?.value }
    setUserInput(newUserInput)
  }

  const handleFormSubmission = () => {
    if (categories.length === 0) addCategory(userInput)

    // check unique id & categories
    let idExists = false
    let labelExists = false

    for (let i = 0; i < categories.length; i++) {
      if (userInput.id === categories[i].id) {
        idExists = true // enable flag
        resetForm()
        alert('Enter Unique ID') // the user
        break // the loop
      } else if (userInput.label === categories[i].label) {
        labelExists = true // enable flag
        resetForm()
        alert('Enter Unique Label') // the user
        break // the loop
      }
    }

    // safe insertion after finishing the loop
    if (!idExists && !labelExists) {
      addCategory(userInput) // to global store
    }
  }

  const resetForm = () => {
    // factor in prepopulated values to autogenerate ID
    if (categories.length > 0) {
      setUserInput({ ...emptyFormState, id: categories.at(-1)?.id + 1 })
    } else setUserInput(emptyFormState)
  }

  const removeCategory = () => {
    console.log('@removeCategory')
    // if category has no transactions yet -> delete
    // if category has transaction -> provide option to merge with another category
  }

  // ------------------------ JSX RENDERING ------------------------

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
            <CategoryRow removeCategory={removeCategory} />

            {/* Transaction addition Form */}
            <CategoryAdditionForm
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

export default CategoriesTable
