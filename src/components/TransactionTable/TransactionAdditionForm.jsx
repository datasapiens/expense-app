import React from 'react'

// Last Row on Table
const TransactionAdditionForm = ({
  transactions,
  userInput,
  handleInputChange,
  categories,
  addTransaction,
}) => {
  return (
    <tr>
      <td>
        <input
          disabled
          type='number'
          name='id'
          value={transactions.at(-1)?.id ? transactions.at(-1)?.id + 1 : 0}
          // onChange={handleInputChange}
        />
      </td>
      <td>
        <input type='text' name='label' value={userInput?.label} onChange={handleInputChange} />
      </td>
      <td>
        <input type='date' name='date' value={userInput?.date} onChange={handleInputChange} />
      </td>
      <td>
        <input type='number' name='amount' value={userInput?.amount} onChange={handleInputChange} />
      </td>
      <td>
        <select
          name='category'
          id='category-select'
          value={userInput?.category}
          onChange={handleInputChange}>
          <option value=''>--Please choose an option--</option>
          {Array.isArray(categories)
            ? categories.map(i => (
                <option key={i.id} value={i?.label}>
                  {i.label}
                </option>
              ))
            : null}
        </select>
      </td>

      <td>
        <input type='submit' name='Add' value='Add Transaction' onSubmit={addTransaction} />
      </td>
    </tr>
  )
}

export default TransactionAdditionForm
