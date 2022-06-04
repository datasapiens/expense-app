import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ITable } from "../../interfaces/table.interface";
import "./table.scss";

const Table = ({ tableData, columns, del }: ITable) => {
  const newCol = columns.filter(col => col.header !== '#')
  
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>{newCol && newCol.map((col) => (<th>{col.header}</th>))}
          {del && <th>Del</th>}
          </tr>
        </thead>
        <tbody>
          {tableData && tableData.map((row: any) => (
            <tr>
              {
               newCol && newCol.map((col) => (
                <td>{row[col.field]}</td>
                
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
