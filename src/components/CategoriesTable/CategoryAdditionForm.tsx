// Last Row on Table
const CategoryAdditionForm = ({
  userInput,
  handleInputChange,
  handleFormSubmission,
}): JSX.Element => {
  return (
    <tr key='additionForm'>
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
        <button
          key='submit'
          type='button'
          name='Add'
          value='Add Category '
          onClick={handleFormSubmission}>
          Submit
        </button>
      </td>
    </tr>
  )
}
export default CategoryAdditionForm
