import React, { useState } from "react";
import "./styles.scss";

const AddCategoriesForm = (props: { onSubmit: Function }) => {
  const onSubmit = props.onSubmit;
  const [categoryLabel, setCategoryLabel] = useState("");
  const submitValue = () => {
    const formValues = {
      label: categoryLabel,
    };
    setCategoryLabel("");
    onSubmit(formValues);
  };

  return (
    <>
      <p>Add Categories</p>
      <input
        type="text"
        placeholder="Category Label"
        onChange={(e) => setCategoryLabel(e.target.value)}
        value={categoryLabel}
      />
      <button onClick={submitValue}>Submit</button>
    </>
  );
};

export default AddCategoriesForm;
