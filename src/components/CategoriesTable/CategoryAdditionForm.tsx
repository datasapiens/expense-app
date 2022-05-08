import s from './CategoryAdditionForm.module.scss'

// Last Row on Table
const CategoryAdditionForm = ({
  userInput,
  handleInputChange,
  handleFormSubmission,
}): JSX.Element => {
  return (
    <tr key='additionForm' className={s.categoryAddRow}>
      <td>
        {/* Auto Incrementing ID Field */}
        <input disabled key='id' type='number' name='id' value={userInput?.id} />
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
        <input type='submit' name='Add' value='Add' className={s.addBtn} />
      </td>
    </tr>
  )
}
export default CategoryAdditionForm
