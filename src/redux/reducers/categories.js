import {
  ADD_CATEGORY,
  GET_CATEGORY,
  REMOVE_CATEGORY,
} from "../types/categories";

const db = () => {
  const list = JSON.parse(localStorage.getItem("categories"));
  let categories = [];
  if (list) {
    categories = list;
  } else {
    categories.push(
      {
        id: 1,
        label: "Salary",
      },
      {
        id: 2,
        label: "Education",
      },
      {
        id: 3,
        label: "Gifts",
      },
      {
        id: 4,
        label: "Food",
      },
      {
        id: 5,
        label: "Traveling",
      },
      {
        id: 6,
        label: "Going out",
      }
    );
  }

  return categories;
};

const initialState = {
  categories: db(),
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      localStorage.setItem(
        "categories",
        JSON.stringify([...state.categories, action.data])
      );
      return {
        ...state,
        categories: [...state.categories, action.data],
      };
    case REMOVE_CATEGORY:
      const updatedCategory = state.categories.filter(
        (category) => category.id !== action.data.id
      );
      localStorage.setItem("categories", JSON.stringify(updatedCategory));
      return {
        ...state,
        categories: updatedCategory,
      };
    case GET_CATEGORY:
      return state;
    default:
      return state;
  }
};
