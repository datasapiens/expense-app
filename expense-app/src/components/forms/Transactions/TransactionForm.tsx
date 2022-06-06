
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { Form, Button } from "react-bootstrap";
import { Category } from "../../../interfaces/category.interface";
import { TransactionType } from "../../../interfaces/transaction.interface";
import "./Transaction.scss";
import { addNewTransaction } from "../../../state/store/reducers/transaction.reducer";
import { useAppDispatch } from "../../../state/store/hooks";

function TransactionForm({ categories, closeModal}: any) {
  const [label, setLabel] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      dispatch(addNewTransaction({
        id: uuid(),
        label: label,
        date: date,
        categoryId: categoryId,
        amount: Number(amount),
        type:
          Number(amount) < 0
            ? TransactionType.EXPENSES
            : TransactionType.INCOME,
      }))
    } catch (error) {
      
    }

    setTimeout(() => {
      closeModal(false)
    }, 100);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="label">
        <Form.Control
          type="text"
          placeholder="Label"
          onChange={(e) => setLabel(e.target.value)}
          value={label}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Control
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="amount">
        <Form.Control
          type="text"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </Form.Group>
      <Form.Select
        aria-label="Default select"
        className="mb-3"
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option>Categories</option>
        {categories.map((category: Category) => (
          <option key={category.id} value={category.id}>
            {category.label}
          </option>
        ))}
      </Form.Select>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TransactionForm;


