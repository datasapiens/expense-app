import React, { useLayoutEffect, useState } from "react";
import { Category } from "../../models";
import "./styles.scss";

const AddTransactionsForm = (props: {
  categories: Category[];
  onSubmit: Function;
}) => {
  const categories = props.categories;
  const onSubmit = props.onSubmit;
  useLayoutEffect(() => {
    if (categories.length) {
      setTransactionCategory(categories[0].id.toString());
    }
  }, [categories]);
  const [transactionLabel, setTransactionLabel] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionCategory, setTransactionCategory] = useState("");
  const submitValue = () => {
    const formValues = {
      label: transactionLabel,
      amount: transactionAmount,
      category: parseInt(transactionCategory),
    };
    setTransactionLabel("");
    setTransactionAmount("");
    if (categories.length) {
      setTransactionCategory(categories[0].id.toString());
    }
    onSubmit(formValues);
  };

  return (
    <>
      <p>Add Transactions</p>
      <input
        type="text"
        placeholder="Transaction Label"
        onChange={(e) => setTransactionLabel(e.target.value)}
        value={transactionLabel}
      />
      <input
        type="number"
        placeholder="Transaction Amount"
        onChange={(e) => setTransactionAmount(e.target.value)}
        value={transactionAmount}
      />
      <select
        value={transactionCategory}
        onChange={(e) => setTransactionCategory(e.target.value)}
        onBlur={(e) => setTransactionCategory(e.target.value)}
      >
        {categories.map((category: any) => (
          <option key={category.id} value={category.id}>
            {category.label}
          </option>
        ))}
      </select>
      <button onClick={submitValue}>Submit</button>
    </>
  );
};

export default AddTransactionsForm;
