import React, { FormEvent, useState } from "react";
import { ExpenseType, ICategory, ITransaction } from "../../../interfaces";
import formStyles from "../../styles/Form.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../store/reducers/categories/category.reducer";
import { v4 as uuidv4 } from "uuid";
import { addTransaction } from "../../../store/reducers/transactions/transaction.action-creators";

const initialInputState: ITransaction = { label: "", date: undefined, amount: undefined, category: "" };

const TransactionForm: React.FC = () => {
  const [input, setInput] = useState<ITransaction>(initialInputState);
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);

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
    const { amount, category } = input;
    if (amount === 0 || !amount) {
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

    input.id = uuidv4();
    input.type = amount! > 0 ? ExpenseType.INCOME : ExpenseType.EXPENSE;
    dispatch(addTransaction(input));
    refreshPage();
  };

  const refreshPage = () => {
    window.location.reload();
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
          defaultValue={input.label}
          onChange={handleInputChange}
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
          defaultValue={undefined}
          onChange={handleInputChange}
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
          defaultValue={input.amount}
          onChange={handleInputChange}
        />
      </div>
      <div className={formStyles.control}>
        <label htmlFor="category">
          Category<span className="asterisk">*</span>
        </label>
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

export default React.memo(TransactionForm);
