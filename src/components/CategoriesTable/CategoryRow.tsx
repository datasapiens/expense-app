import React from 'react'

import useCategories from '../../hooks/useCategories'

const CategoryRow = ({ handleDelBtnOnPress }): JSX.Element => {
  const { categories } = useCategories()
  if (!Array.isArray(categories)) return null

  const Rows = categories.map((item, index) => (
    <tr key={item?.id}>
      <td>#{item?.id}</td>
      <td>{item?.label}</td>
      <td>
        <button id={item?.id} name={item?.label} type='button' onClick={handleDelBtnOnPress}>
          🗑
        </button>
      </td>
    </tr>
  ))

  return <>{Rows}</>
}

export default CategoryRow
