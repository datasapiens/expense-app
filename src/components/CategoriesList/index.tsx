import React from "react";
import { Button } from "react-bootstrap";
import { Category } from "../../models";
import "./styles.scss";

const CategoriesList = (props: {
  categories: Category[];
  onDelete: Function;
}) => {
  const onDelete = props.onDelete;
  return (
    <>
      <p>CategoriesList</p>
      <ul>
        {props.categories.map((category: Category) => {
          return (
            <li key={category.id}>
              {category.label}{" "}
              <Button onClick={() => onDelete(category)}>delete</Button>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default CategoriesList;
