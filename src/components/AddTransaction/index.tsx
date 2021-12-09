import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

type Props = {
  saveTransaction: (transaction: Transaction | any) => void;
};

const Index: React.FC<Props> = ({ saveTransaction }) => {
  const [transaction, setTransaction] = useState<Transaction | {}>();
  const categories: readonly Category[] = useSelector((state: DataState) => state.categories, shallowEqual);

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveTransaction(transaction);
  };

  return (
    <form onSubmit={addNewArticle}>
      <input
        type="text"
        id="label"
        placeholder="Label"
        onChange={(e) => setTransaction({ ...transaction, label: e.target.value })}
        required
      />
      <input
        type="date"
        id="date"
        placeholder="Date"
        onChange={(e) => setTransaction({ ...transaction, date: e.target.value })}
        required
      />
      <input
        type="number"
        id="amount"
        placeholder="Amount"
        onChange={(e) => setTransaction({ ...transaction, amount: parseFloat(e.target.value) })}
        required
      />
      <select id="category" onChange={(e) => setTransaction({ ...transaction, category: e.target.value })} required>
        <option value="" disabled selected>
          Choose category
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.label}
          </option>
        ))}
      </select>
      <button disabled={transaction === undefined ? true : false}>Add Transaction</button>
    </form>
  );
};

export default Index;
