import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
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
      <Form onSubmit={handleSubmit((data) => submitValues(data))}>
        <FormControl
          type="text"
          {...register("label", { required: true })}
          placeholder="Category Label"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default AddCategoriesForm;
