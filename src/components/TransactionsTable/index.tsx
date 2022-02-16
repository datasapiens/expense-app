import React from "react";
import { Table } from "react-bootstrap";
import { Category, Transaction } from "../../models";
import "./styles.scss";

const TransactionsTable = (props: {
  categories: Category[];
  transactions: Transaction[];
}) => {
  const formatDate = (date: number) => {
    return new Date(date).toLocaleString();
  };

  const getCategory = (categoryId: number) => {
    const categorylabel = props.categories.find((category) => {
      return category.id === categoryId;
    })?.label;
    return categorylabel;
  };

  return (
    <>
      <p>TransactionsTable</p>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Label</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.transactions.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.label}</td>
              <td>{transaction.amount}</td>
              <td>{getCategory(transaction.category)}</td>
              <td>{formatDate(transaction.date)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TransactionsTable;
