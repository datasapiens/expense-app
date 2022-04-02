import { ITransaction } from "interfaces/transaction.interface";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorySelector } from "store/slices/category.slice";
import { addTransaction } from "store/slices/transaction.slice";
import styled from "styled-components";

const AddTransaction = () => {
  const categories = useSelector(categorySelector);
  const [info, setInfo] = useState<Partial<ITransaction>>({ label: "" });
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { value, name, type } = e.target;

    setInfo({ ...info, [name]: type === "number" ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!info.categoryId || !info.label) return;
    dispatch(addTransaction(info as ITransaction));
    setInfo({
      categoryId: "",
      amount: "" as unknown as number,
      label: "",
      date: "",
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <select
        value={info.category as unknown as string}
        onChange={handleChange}
        name="categoryId"
        required
      >
        <option value="">Category</option>
        {categories.map((cateory, i) => (
          <option value={cateory.id} key={i}>
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
