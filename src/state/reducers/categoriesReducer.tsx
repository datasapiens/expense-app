import { IAction, ICategoriesState } from "../models";

const INITIAL_STATE: ICategoriesState = {
	categories: [],
}


const categoriesReducer = (state: ICategoriesState = INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case "CATEGORIES_SUCCESS":
            return {
				...state,
                categories: action.payload
			};
        default:
            return state;
    }
}

export default categoriesReducer;