import useCategories from '../../hooks/useCategories';

// Last Row on Table
const TransactionAdditionForm = ({
  userInput,
  handleInputChange,
  handleFormSubmission,
}): JSX.Element => {
  const { categories } = useCategories();

  return (
    <tr key='additionForm'>
      <td>
        <input disabled type='number' name='id' value={userInput?.id} />
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
          name='categoryId'
          id='category-select'
          value={userInput?.category}
          onChange={handleInputChange}>
          <option value=''>--Please choose an option--</option>
          {Array.isArray(categories)
            ? categories.map(i => (
                <option key={i.id} value={i?.id}>
                  {i.label}
                </option>
              ))
            : null}
        </select>
      </td>

      <td>
        <input type='submit' name='Add' value='Add Transaction' onSubmit={handleFormSubmission} />
      </td>
    </tr>
  );
};

export default TransactionAdditionForm;
