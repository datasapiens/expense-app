import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
    categories: [],
    transactions: [],

};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            };

        case actionTypes.GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.transactions,
            };

        default:
            return state;
    }
};
