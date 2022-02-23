import React from 'react'

const CategoryRow = ({ categories, removeCategory }) => {
  if (!Array.isArray(categories)) return null

  const Row = ({ id, label }) => (
    <tr>
      <td>{id}</td>
      <td>{label}</td>
      <td>
        <button onClick={removeCategory}>-</button>
      </td>
    </tr>
  )

  const Rows = categories.map((item, index) => (
    <Row key={index} id={item?.id} label={item?.label} />
  ))

  return Rows
}

export default CategoryRow
