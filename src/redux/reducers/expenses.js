import {
  ADD_EXPENSE,
  GET_EXPENSE,
  REMOVE_EXPENSE,
  SEARCH_EXPENSE,
} from "../types/expenses";

const db = () => {
  const list = localStorage.getItem("expenses");
  let expenses = [];
  if (list) {
    expenses = JSON.parse(list);
  }

  return expenses;
};

const initialState = {
  expenses: db(),
  query: "",
  total: localStorage.getItem("total") ? +localStorage.getItem("total") : 0,
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      localStorage.setItem(
        "expenses",
        JSON.stringify([...state.expenses, action.data])
      );
      localStorage.setItem(
        "total",
        JSON.stringify(state.total + Number(action.data.amount))
      );
      return {
        ...state,
        total: state.total + Number(action.data.amount),
        expenses: [...state.expenses, action.data],
      };
    case REMOVE_EXPENSE:
      const filteredExpenses = state.expenses.filter(function (expense) {
        return (
          action.data.filter(function (item) {
            return item.id === expense.id;
          }).length === 0
        );
      });
      localStorage.setItem("expenses", JSON.stringify(filteredExpenses));

      // In here we need to get sum of removed transactions
      const updatedAmmount = action.data.reduce(
        (prev, current) => prev + +current.amount,
        0
      );

      // In here wee need to subtract deleted transactions amount from total amount and update total amount
      localStorage.setItem(
        "total",
        JSON.stringify(Number(state.total) - Number(updatedAmmount))
      );
      return {
        ...state,
        total: Number(state.total) - Number(updatedAmmount),
        expenses: filteredExpenses,
      };

    case SEARCH_EXPENSE:
      return {
        ...state,
        query: action.query,
      };
    case GET_EXPENSE:
      return state;
    default:
      return state;
  }
};
