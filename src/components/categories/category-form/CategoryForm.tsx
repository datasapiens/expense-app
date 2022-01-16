import React, { FormEvent, useState } from "react";
import { ICategory } from "../../../interfaces";
import formStyles from "../../styles/Form.module.scss";

const initialInputState: ICategory = { label: "" };

const CategoryForm: React.FC = () => {
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
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      <h1 className={formStyles.title}>Add Category</h1>
      <div className={formStyles.control}>
        <label htmlFor="label">Category Name</label>
        <input type="text" placeholder="Category name" name="label" id="label" onChange={handleInputChange} />
      </div>
      <div className={formStyles.actions}>
        <button>Add Category</button>
      </div>
    </form>
  );
};

export default CategoryForm;
