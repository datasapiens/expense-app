import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getCategoryById } from "../../helpers/getCategoryById";
import { ITable } from "../../interfaces/table.interface";
import "./table.scss";

type FormattedData = {
  key: string,
  label: string,
  date: string,
  amount: number,
  category: string
}

const Table = ({ tableData, columns, del, categories }: ITable) => {
  const [updatedTableData, SetCategory] = useState<FormattedData[]>([])
  const newCol = columns.filter((col: any) => col.header !== '#')

  useEffect(() => {
    let addCategoryToTableData: FormattedData[] = [];
    tableData.forEach((element: any) => {
      addCategoryToTableData.push({ 
        key: element.id,
        label: element.label,
        date: element.date!,
        amount: element.amount!,
        category: getCategoryById(element.categoryId, categories)?.label || ''
      })
    });
    SetCategory(addCategoryToTableData)
  }, [tableData, categories])
  
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>{newCol && newCol.map((col: any, index: number) => (<th key={index}>{col.header}</th>))}
          {del && <th >Delete</th>}
          </tr>
        </thead>
        <tbody>
          {updatedTableData && updatedTableData.map((row: any, index: any) => (
            <tr>
              {
               newCol && newCol.map((col: { field: string | number; }) => (
                <td key={row.id}>{row[col.field]}</td>
                
               )) 
              }
            {del &&<td><FontAwesomeIcon icon={faTrashAlt}/></td>}
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
