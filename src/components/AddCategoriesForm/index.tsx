import React from "react";
import { useForm } from "react-hook-form";
import "./styles.scss";

const AddCategoriesForm = (props: { onSubmit: Function }) => {
  const onSubmit = props.onSubmit;
  const { register, handleSubmit, setValue } = useForm();

  const submitValues = (data: any) => {
    setValue("label", "");
    onSubmit(data);
  };

  return (
    <>
      <p>Add Categories</p>
      <form onSubmit={handleSubmit((data) => submitValues(data))}>
        <input
          {...register("label", { required: true })}
          type="text"
          placeholder="Category Label"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddCategoriesForm;
