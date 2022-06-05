// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Transaction.scss";

type Category = {
  id: string,
  label: string
};

function TransactionForm({ categories }: any) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Label" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="date" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Amount" />
      </Form.Group>
      <Form.Select aria-label="Default select" className="mb-3">
        <option>Categories</option>
        {categories.map((category: Category) => (
          <option key={category.id} value={category.id}>
            {category.label}
          </option>
        ))}
      </Form.Select>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TransactionForm;
