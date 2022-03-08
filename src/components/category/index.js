import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";

function Category() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const handleSave = () => {
    if (name === "" || id === "") {
      alert("Please fill all the fields");
    }
    dispatch({
      type: actions.ADD_CATEGORY,
      payload: {
        [id]: name,
      },
    });
    setName("");
    setId("");
  };
  const handleDelete = (id) => {
    dispatch({
      type: actions.DELETE_CATEGORY,
      id,
    });
  };
  return (
    <div className="p-3">
      <div className="mb-3">
        <label className="form-label">category name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="form-control"
          placeholder="category name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">category id</label>
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          type="text"
          className="form-control"
          placeholder="id"
        />
      </div>
      <button className="btn btn-lg btn-primary" onClick={handleSave}>
        Submit
      </button>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">category name</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(categories).map((i, index) => {
            return (
              <tr key={index}>
                <th scope="row">{i}</th>
                <td>{categories[i]}</td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(i)}
                >
                  delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Category;
