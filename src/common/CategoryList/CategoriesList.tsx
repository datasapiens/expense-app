import React from 'react'

interface CategoryListI{
    label:string
}

export const CategoriesList :React.FC<CategoryListI> = ({label}) => {
  return (
    <div className='category_option'>
        <p>{label}</p>
    </div>
  )
}
