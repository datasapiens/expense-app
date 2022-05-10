import { Category, Transaction } from "../../models";

export interface IAction {
    type: string,
    payload: any
}

export interface ICategoriesState {
    categories: Category[],
    showCategoryAddedSuccessAlert: boolean
}

export interface ITransactionsState {
    transactions: Transaction[],
    showTransactionAddedSuccessAlert: boolean
}
