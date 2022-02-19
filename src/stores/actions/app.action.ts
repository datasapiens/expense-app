import * as actionTypes from '../actionTypes';
import {ITransaction} from "../../shared/models/Transaction";
import {ICategory} from "../../shared/models/Category";

export const getCategories = () => async (dispatch: any) => {
    const storage = localStorage.getItem('categories');

    if (storage) {
        const categories = JSON.parse(storage);

        dispatch({
            type: actionTypes.GET_CATEGORIES,
            categories,
        });
    }
};

export const getTransactions = () => async (dispatch: any) => {
    const storage = localStorage.getItem('transactions');

    if (storage) {
        const transactions = JSON.parse(storage);

        dispatch({
            type: actionTypes.GET_TRANSACTIONS,
            transactions,
        });
    }
};

export const addCategory = (label: string) => async (dispatch: any) => {
    const storage = localStorage.getItem('categories');
    let categories = [];

    if (storage) {
        categories = JSON.parse(storage);
    }

    const id = categories
        .map((category: ICategory) => category.id)
        .sort((a: number, b: number) => b - a)[0] + 1;

    categories.push({id, label});

    localStorage.setItem('categories', JSON.stringify(categories));

    dispatch(getCategories());
};

export const addTransaction = (transaction: ITransaction) => async (dispatch: any) => {
    const storage = localStorage.getItem('transactions');
    let transactions = [];

    if (storage) {
        transactions = JSON.parse(storage);
    }

    const record = {...transaction, id: transactions.length,};
    transactions.push(record);

    localStorage.setItem('transactions', JSON.stringify(transactions));

    dispatch(getTransactions());
};

export const initCategories = () => async (dispatch: any) => {
    const storage = localStorage.getItem('categories');
    let categories = [];

    if (storage) {
        categories = JSON.parse(storage);
    }

    if (categories.length === 0) {
        let defaultLabels = ['Salary', 'Gifts', 'Food', 'Going out', 'Traveling'];
        categories = defaultLabels.map((category, index) => ({id: index, label: category}));

        localStorage.setItem('categories', JSON.stringify(categories));
        dispatch(getCategories());
    }
};

export const removeCategory = (id: number) => async (dispatch: any) => {
    const storage = localStorage.getItem('categories');
    let categories = [];

    if (storage) {
        categories = JSON.parse(storage);
    }

    categories = categories.filter((category: ICategory) => (category.id !== id));

    localStorage.setItem('categories', JSON.stringify(categories));

    dispatch(getCategories());
};
