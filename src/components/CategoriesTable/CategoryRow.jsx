import React from 'react'

const CategoryRow = ({ categories, removeCategory }) => {
  if (!Array.isArray(categories)) return null

  const Rows = categories.map((item, index) => (
    <tr key={item?.id}>
      <td>{item?.id}</td>
      <td>{item?.label}</td>
      <td>
        {/* <input type='button' onClick={removeCategory} value='-' /> */}
        <button type='button' onClick={removeCategory}>
          -
        </button>
      </td>
    </tr>
  ))

  return Rows
}

export default CategoryRow
