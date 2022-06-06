import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CategoriesColumns } from "../../data/data";
import { Category } from "../../interfaces/category.interface";
import { useAppDispatch } from "../../state/store/hooks";
import { deleteCategory } from "../../state/store/reducers/categories.reducer";

function CategoryTable({ categories }: any) {
  const dispatch = useAppDispatch();
  const columns = CategoriesColumns.filter((col: any) => col.header !== "#");
  const handleDelete = (index: any, e: any) => {
    let category: Category = categories.filter(
      (cat: any, i: number) => i === index
    )[0];

    try {
      dispatch(deleteCategory(category));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((col: any, index: number) => (
                <th key={index}>{col.header}</th>
              ))}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((row: any, index: any) => (
              <tr key={row.id}>
                {columns &&
                  columns.map((col: { field: string | number }) => (
                    <td>{row[col.field]}</td>
                  ))}
                <td>
                  <button type="button" onClick={(e) => handleDelete(index, e)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;
