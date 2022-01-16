import React, { FormEvent, useState } from "react";
import { ICategory, ITransaction } from "../../../interfaces";
import CategoryForm from "../../categories/category-form/CategoryForm";
import formStyles from "../../styles/Form.module.scss";

const initialInputState: ITransaction = { label: "", date: "", amount: "", category: "" };
const categories: ICategory[] = [
  { id: "1", label: "Test" },
  { id: "2", label: "Food" },
];

const TransactionForm: React.FC = () => {
  const [input, setInput] = useState<ITransaction>(initialInputState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      <h1 className={formStyles.title}>Add Transaction</h1>
      <div className={formStyles.control}>
        <label htmlFor="label">Label</label>
        <input type="text" placeholder="Label" id="label" defaultValue={input.label} onChange={handleInputChange} />
      </div>
      <div className={formStyles.control}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          placeholder="Date"
          name="date"
          id="date"
          defaultValue={input.date}
          onChange={handleInputChange}
        />
      </div>
      <div className={formStyles.control}>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          id="amount"
          defaultValue={input.amount}
          onChange={handleInputChange}
        />
      </div>
      <div className={formStyles.control}>
        <label htmlFor="category">Category</label>
        <select name="category" id="category" defaultValue={0} onChange={handleInputChange}>
          <option value={0}>Select a category</option>
          {categories.map((category: ICategory) => (
            <option value={category.id} key={category.id}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <div className={formStyles.actions}>
        <button>Add Transaction</button>
      </div>
    </form>
  );
};

export default TransactionForm;
