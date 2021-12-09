import * as actionTypes from "./actionTypes";

const initialState: DataState = {
  categories: [
    {
      id: 1,
      label: "Salary",
    },
    {
      id: 2,
      label: "Gifts",
    },
    {
      id: 3,
      label: "Food",
    },
    {
      id: 4,
      label: "Traveling",
    },
  ],
  transactions: [],
};

const reducer = (state: DataState = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case actionTypes.ADD_TRASNACTION: {
      const newTransaction: Transaction = { ...action.transaction, id: state.transactions.length + 1 };
      const data = { ...state, transactions: state.transactions.concat(newTransaction) };
      return data;
    }
    case actionTypes.ADD_CATEGORY: {
      const newCategory: Category = { id: state.categories.length + 1, label: action.category.label };
      const data = { ...state, categories: state.categories.concat(newCategory) };
      return data;
    }
    case actionTypes.REMOVE_CATEGORY: {
      const updatedCategories: Category[] = state.categories.filter((cat) => cat.id !== action.category.id);
      const data = { ...state, categories: updatedCategories };
      return data;
    }
  }
  return state;
};

export default reducer;
