import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface Category {
  id: number,
  category: string
}

interface State {
  categoryList: Category[];
}

const initialState: State = {
  categoryList: [
    { id: 0, category: "Food" },
    { id: 1, category: "Shopping" },
  ],
};

const categoryReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_CATEGORY:
        state.categoryList = [...state.categoryList, {id:action.id, category:action.payload}]
        return state;
    case ActionType.REMOVE_CATEGORY:
        state.categoryList = state.categoryList.filter(
          (category) => category.id !== action.id
        );
        return state;
    default:
      return state;
  }
};
export default categoryReducer;
