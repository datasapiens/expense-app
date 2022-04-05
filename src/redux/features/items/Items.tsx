import React from "react";
import { useAppSelector } from "../../hooks";
import { Items } from "./itemsSlice";

export function ItemList() {
  const items = useAppSelector(Items);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Lable</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.label}</td>
            <td>{item.date}</td>
            <td>{item.amount}</td>
            <td>{item.category?.id ? item.category.label : "Uncategorised"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
