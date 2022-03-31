import { ITransaction } from "interfaces/transaction.interface";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorySelector } from "store/slices/category.slice";
import { addTransaction } from "store/slices/transaction.slice";
import styled from "styled-components";

const AddTransaction = () => {
  const categories = useSelector(categorySelector);
  const [info, setInfo] = useState<Partial<ITransaction>>({});
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { value, name } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addTransaction(info as ITransaction));
    setInfo({
      category: " " as unknown as ITransaction,
      label: "",
      amount: 0,
      date: "",
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <select
        value={info.category as unknown as string}
        onChange={handleChange}
        name="category"
        required
      >
        <option value="">Category</option>
        {categories.map((cateory, i) => (
          <option value={cateory.label} key={i}>
            {cateory.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={info.label}
        placeholder="Label"
        onChange={handleChange}
        name="label"
        required
      />
      <input
        type="number"
        value={info.amount}
        placeholder="Amount"
        onChange={handleChange}
        name="amount"
        required
      />
      <input
        type="date"
        value={info.date as string}
        placeholder="Date"
        onChange={handleChange}
        name="date"
        required
      />

      <button>Add Transaction</button>
    </Form>
  );
};

export default AddTransaction;

const Form = styled.form`
  select,
  input {
    margin-bottom: 1rem;
    width: 100%;
    padding: 0.5rem;
  }
  button {
    all: unset;
    background-color: #ddd;
    padding: 0.5rem 1.5rem;
    margin-bottom: 1rem;
  }
`;
