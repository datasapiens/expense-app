import React from 'react'

// Last Row on Table
const CategoryAdditionForm = ({ categories, userInput, handleInputChange, addCategory }) => {
  return (
    <tr>
      <td>
        {/* Auto Incrementing ID Field */}
        <input
          // disabled
          key='id'
          type='number'
          name='id'
          value={userInput?.id}
          // value={categories.at(-1)?.id + 1} // bad
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          key='label'
          type='text'
          name='label'
          value={userInput?.label}
          onChange={handleInputChange}
        />
      </td>

      <td>
        {/* <input key='submit' type='submit' name='Add' value='Add Category ' onSubmit={addCategory} /> */}
        <button key='submit' type='button' name='Add' value='Add Category ' onClick={addCategory}>
          Submmit
        </button>
      </td>
    </tr>
  )
}
export default CategoryAdditionForm
