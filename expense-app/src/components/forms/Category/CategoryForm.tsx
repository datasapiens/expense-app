import React from "react";
import { Button, Form } from "react-bootstrap";

function CategoryForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="label">
        <Form.Control type="text" placeholder="Label" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CategoryForm;
