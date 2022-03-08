import actions from "../actions";

const initialState = {
  1234: "oven",
  abc12: "Salary",
  456: "Gifts",
  789: "Food",
  74563: "Going out",
  78569: "Traveling",
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_CATEGORY: {
      return { ...state, ...action.payload };
    }
    case actions.DELETE_CATEGORY: {
      const stateCopy = { ...state };
      delete stateCopy[action.id];
      return { ...stateCopy };
    }
    default:
      return state;
  }
}
