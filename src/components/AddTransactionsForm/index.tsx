import React, { useLayoutEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Category } from "../../models";
import styles from "./AddTransactionsForm.module.scss";

const AddTransactionsForm = (props: {
  categories: Category[];
  onSubmit: Function;
}) => {
  const onSubmit = props.onSubmit;
  const categories = props.categories;
  const { register, handleSubmit, setValue } = useForm();

  useLayoutEffect(() => {
    if (categories.length) {
      setValue("category", categories[0].id.toString());
    }
  }, [categories, setValue]);

  const submitValues = (data: any) => {
    setValue("label", "");
    setValue("amount", "");
    if (categories.length) {
      setValue("category", categories[0].id.toString());
    }
    onSubmit(data);
  };

  return (
    <div className={styles.addTransactionsForm}>
      <p className={styles.addTransactionsTitle}>Add Transactions</p>
      <Form onSubmit={handleSubmit((data) => submitValues(data))}>
        <div className={styles.formControls}>
          <Form.Label className={styles.label}>Label</Form.Label>
          <FormControl
            className={styles.control}
            {...register("label", { required: true })}
            type="text"
            placeholder="Transaction label"
          />
          <Form.Label className={styles.label}>
            Amount (negative amount means expense)
          </Form.Label>
          <FormControl
            className={styles.control}
            {...register("amount", { required: true })}
            type="number"
            placeholder="Transaction amount"
          />
          <Form.Label className={styles.label}>Category</Form.Label>
          <Form.Select
            className={styles.control}
            {...register("category", { required: true })}
          >
            {categories.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </Form.Select>
          <Button type="submit" variant="success">
            Add Transaction
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTransactionsForm;