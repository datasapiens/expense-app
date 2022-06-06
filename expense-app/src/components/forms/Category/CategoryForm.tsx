import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../../../state/store/hooks";
import { addNewCategory } from "../../../state/store/reducers/categories.reducer";

function CategoryForm({closeModal}: any) {
  const [label, setLabel] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      dispatch(addNewCategory({
        id: uuid(),
        label: label
      }))
    } catch (error) {
      console.log(error);
      
    }

    setTimeout(() => {
      closeModal(false)
    }, 100);
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="label">
        <Form.Control type="text" placeholder="Label" value={label} onChange={(e) => setLabel(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CategoryForm;

