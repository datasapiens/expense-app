import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

const Main = () => {
  const categories = useSelector((state: any) => state.categories.categories);
  useLayoutEffect(() => {
    if(categories.length) {
      setTransactionCategory(categories[0].id.toString())
    }
  }, [categories]);

  const [transactionLabel, setTransactionLabel] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionCategory, setTransactionCategory] = useState("");
  const submitValue = () => {
    const frmdetails = {
      "Transaction Label": transactionLabel,
      "Transaction Amount": transactionAmount,
      "Transaction Category": transactionCategory
    };
    setTransactionLabel("");
    setTransactionAmount("");
    console.log(frmdetails);
  };

  return (
    <div className="mainContainer">
      <p>Main</p>
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
    </div>
  );
};

export default Main;
