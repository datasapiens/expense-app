import React, { FormEvent, useEffect, useState } from "react";
import { ExpenseType, ICategory, ITransaction } from "../../../interfaces";
import formStyles from "../../styles/Form.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../store/reducers/categories/category.reducer";
import { v4 as uuidv4 } from "uuid";
import { addTransaction } from "../../../store/reducers/transactions/transaction.action-creators";

const TransactionForm: React.FC = () => {
  const [label, setLabel] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const dispatch = useDispatch();

  const categories = useSelector(getCategories);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!amount) {
      alert("Transaction amount cannot be 0 or empty");
      return;
    }
    if (category === "") {
      alert("Please select a valid category");
      return;
    }
    if (categories.length === 0) {
      alert("Please create a Caterory");
      return;
    }

    dispatch(
      addTransaction({
        id: uuidv4(),
        label,
        category,
        date,
        amount: Number(amount),
        type: Number(amount) > 0 ? ExpenseType.INCOME : ExpenseType.EXPENSE,
      })
    );
    resetForm();
  };

  const resetForm = () => {
    setLabel("");
    setDate("");
    setAmount("");
    setCategory("");
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      <h1 className={formStyles.title}>Add Transaction</h1>
      <div className={formStyles.control}>
        <label htmlFor="label">
          Transaction Name<span className="asterisk">*</span>
        </label>
        <input
          type="text"
          placeholder="Transaction Name"
          id="label"
          name="label"
          required
          value={label}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)}
        />
      </div>
      <div className={formStyles.control}>
        <label htmlFor="date">
          Date<span className="asterisk">*</span>
        </label>
        <input
          type="date"
          placeholder="Date"
          required
          name="date"
          id="date"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
        />
      </div>
      <div className={formStyles.control}>
        <label htmlFor="amount">
          Amount<span className="asterisk">*</span>
        </label>
        <input
          type="number"
          required
          placeholder="Amount (- for expense and + for income)"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
        />
      </div>
      <div className={formStyles.control}>
        <label htmlFor="category">
          Category<span className="asterisk">*</span>
        </label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
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
