import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ITable } from "../../interfaces/table.interface";
import "./table.scss";

const Table = ({ tableData, columns, del }: ITable) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>{columns && columns.map((col) => (<th>{col.header}</th>))}
          {del && <th><FontAwesomeIcon icon={faTrashAlt}/></th>}
          </tr>
        </thead>
        <tbody>
          {tableData && tableData.map((row: any) => (
            <tr>
              {
               columns && columns.map((col) => (
                <td>{row[col.field]}</td>
               )) 
              }
            
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
