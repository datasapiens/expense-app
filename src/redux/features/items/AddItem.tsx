import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { addItem } from "./itemsSlice";
import { Categories } from "../categories/categoriesSlice";
import styles from "./Items.module.scss";
import "react-datepicker/dist/react-datepicker.css";

export function AddItem() {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useAppDispatch();
  const categories = useAppSelector(Categories);
  const [newItem, setItem] = useState({
    label: "",
    amount: "",
    category: { id: "", label: "" },
  });

  const handleAddItem = () => {
    setItem({
      label: "",
      amount: "",
      category: { id: "", label: "" },
    });
    const dateString = `${
      startDate.getMonth() + 1
    }/${startDate.getDate()}/${startDate.getFullYear()}`;
    dispatch(
      addItem(newItem.label, dateString, newItem.amount, newItem.category)
    );
  };

  const handleChange = (e: any) => {
    let value: any;
    value = e.target.value;
    if (e.target.localName === "select") {
      value = {
        id: e.target.value,
        label: e.target.options[e.target.selectedIndex].text,
      };
    }
    setItem((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };
  return (
    <div className={styles.formContainer}>
      <h3>Add Income/Expense</h3>
      <input
        onChange={handleChange}
        value={newItem.label}
        name="label"
        placeholder="Label"
      />
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />

      <input
        onChange={handleChange}
        value={newItem.amount}
        name="amount"
        placeholder="Amount"
      />

      <select onChange={handleChange} name="category" id="categories">
        <option value="" selected>
          {" "}
          -- select an option --{" "}
        </option>
        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
            data-label={category.label}
          >
            {category.label}
          </option>
        ))}
      </select>
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}
