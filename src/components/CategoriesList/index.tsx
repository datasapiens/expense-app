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
    <div className="categoriesListContainer">
      <p className="categoriesListTitle">CategoriesList</p>
      <ul className="categoriesList">
        {props.categories.map((category: Category) => {
          return (
            <li key={category.id}>
              {category.label}{" "}
              <Button variant="danger" onClick={() => onDelete(category)}>Delete</Button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CategoriesList;
