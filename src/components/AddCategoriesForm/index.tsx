import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styles from "./AddCategoriesForm.module.scss";

const AddCategoriesForm = (props: { onSubmit: Function }) => {
  const onSubmit = props.onSubmit;
  const { register, handleSubmit, setValue } = useForm();

  const submitValues = (data: any) => {
    setValue("label", "");
    onSubmit(data);
  };

  return (
    <div className={styles.addCategoriesForm}>
      <p className={styles.addCategoriesTitle}>Add Categories</p>
      <Form onSubmit={handleSubmit((data) => submitValues(data))}>
        <div className={styles.formControls}>
          <Form.Label className={styles.label}>Label</Form.Label>
          <FormControl
            className={styles.control}
            type="text"
            {...register("label", { required: true })}
            placeholder="Category Label"
          />
          <Button type="submit" variant="success">
            Add Category
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddCategoriesForm;
