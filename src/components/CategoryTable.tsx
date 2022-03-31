import { ICategory } from "interfaces/category.interface";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  categorySelector,
  removeCategory,
} from "store/slices/category.slice";
import styled from "styled-components";
import { uid } from "utils/helpers";

const CategoryTable = () => {
  const categories = useSelector(categorySelector);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { label: category, id: uid() };

    dispatch(addCategory(payload));
    setCategory("");
  };

  return (
    <Wrapper>
      <h2>Categories</h2>
      <form onSubmit={handleAddCategory}>
        <input
          className="add-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          type="text"
          placeholder="Add new category"
        />
      </form>
      <table className="table">
        <tbody>
          {categories.map((category, i) => (
            <SingleRow key={i} category={category} />
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default CategoryTable;

const Wrapper = styled.div`
  input {
    display: block;
    width: 100%;
    padding: 0.5rem;
  }
  .add-input {
    margin-bottom: 1rem;
  }
  .edit-input {
    all: unset;
    &:focus {
      color: #2e373a;
    }
  }
  .category-item {
    button {
      all: unset;
      cursor: pointer;
    }
  }
`;

const SingleRow: React.FC<{ category: ICategory }> = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <tr className="category-item">
      <td>{category.label}</td>
      <td align="right">
        <button
          style={{ color: "red" }}
          onClick={() => dispatch(removeCategory(category.id))}
        >
          <i className="fas fa-remove"></i>
        </button>
      </td>
    </tr>
  );
};
