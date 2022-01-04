import React, { ChangeEvent, FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./category.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Category as CategoryType } from "../../store/types";
import { deleteCategoryAction, setCategoryAction } from "../../store/actions";
import { randomColor } from "../../helpers/randomColor";
import { getCategories } from "../../store/selectors";

const Category: FC = () => {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);

  const [label, setLabel] = useState<string>("");

  const AddCategoryHandler = () => {
    if (label) {
      dispatch(
        setCategoryAction({ id: uuidv4(), label, color: randomColor() })
      );
      setLabel("");
    }
  };

  return (
    <>
      <h4 className="heading-4 mt-4">Categories</h4>
      <table className={`${styles.categoriesContainer} table`}>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Label</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item: CategoryType, idx: number) => (
            <tr key={item.id}>
              <th scope="row">{idx + 1}</th>
              <td>{item.label}</td>
              <td>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => dispatch(deleteCategoryAction(item.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="heading-4 mt-4">Add new category</h4>
      <div className="mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Category label"
          value={label}
          aria-describedby="basic-addon1"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLabel(e.target.value)
          }
        />
        <div className="input-group-append">
          <button
            className="btn btn-success mt-3"
            type="button"
            onClick={AddCategoryHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Category;
