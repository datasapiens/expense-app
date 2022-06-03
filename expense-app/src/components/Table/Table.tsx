import React from "react";
import "./table.scss";

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
          </tr>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
