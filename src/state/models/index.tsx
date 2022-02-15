import { Category } from "../../models";

export interface IAction {
    type: string,
    payload: any
}

export interface ICategoriesState {
    categories: Category[],
}