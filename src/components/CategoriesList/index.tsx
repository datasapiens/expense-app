import React from "react";
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
              <button onClick={() => onDelete(category)}>delete</button>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default CategoriesList;
