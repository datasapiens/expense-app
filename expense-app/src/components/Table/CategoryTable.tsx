import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { CategoriesColumns } from '../../data/data';

function CategoryTable({categories}: any) {
    const columns = CategoriesColumns.filter((col: any) => col.header !== '#')

  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>{columns && columns.map((col: any, index: number) => (<th key={index}>{col.header}</th>))}
        <th >Delete</th>
        </tr>
      </thead>
      <tbody>
        {categories && categories.map((row: any, index: any) => (
          <tr>
            {
             columns && columns.map((col: { field: string | number; }) => (
              <td key={row.id}>{row[col.field]}</td>
              
             )) 
            }
          <td><FontAwesomeIcon icon={faTrashAlt}/></td>
        </tr>
        ))}
        
      </tbody>
    </table>
  </div>
  )
}

export default CategoryTable