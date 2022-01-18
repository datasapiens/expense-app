import React, { FormEvent, useEffect, useState } from "react";
import { ICategory } from "../../../interfaces";
import { addCategory } from "../../../store/reducers/categories/category.action-creators";
import formStyles from "../../styles/Form.module.scss";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setTimeout } from "timers/promises";

const initialInputState: ICategory = { label: "" };

const CategoryForm: React.FC = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [input, setInput] = useState<ICategory>(initialInputState);

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
    if (!input.label || input.label.length < 4) {
      alert("Category name is required and 4 characters long");
      return;
    }
    const newCategory: ICategory = {
      id: uuidv4(),
      label: input.label,
    };
    setInput(initialInputState);
    dispatch(addCategory(newCategory));
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      <h1 className={formStyles.title}>Add Category</h1>
      <div className={formStyles.control}>
        <label htmlFor="label">
          Category Name<span className="asterisk">*</span>
        </label>
        <input
          type="text"
          placeholder="Category name"
          value={input.label}
          name="label"
          id="label"
          onChange={handleInputChange}
        />
      </div>
      <div className={formStyles.actions}>
        <button>Add Category</button>
      </div>
    </form>
  );
};

export default CategoryForm;
