import { Category } from "../../redux/initial-state.model";

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const CREATE_CATEGORY_FAILURE = 'CREATE_CATEGORY_FAILURE';

export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const REMOVE_CATEGORY_SUCCESS = 'REMOVE_CATEGORY_SUCCESS';
export const REMOVE_CATEGORY_FAILURE = 'REMOVE_CATEGORY_FAILURE';

export interface GetCategoriesAction {
    type: string;
}
export const getCategories = (): GetCategoriesAction => ({
    type: GET_CATEGORIES,
})

export interface GetCategoriesSuccessAction {
    type: string;
    categories: Category[];
}
export const getCategoriesSuccess = (response: Category[]): GetCategoriesSuccessAction => ({
    type: GET_CATEGORIES_SUCCESS,
    categories: [...response],
})

export interface GetCategoriesFailureAction {
    type: string;
    error: any;
}
export const getCategoriesFailure = (error?: any): GetCategoriesFailureAction => ({
    type: GET_CATEGORIES_FAILURE,
    error: error ? { ...error } : null,
})

export interface CreateCategoryAction {
    type: string;
    category: Category;
}
export const createCategory = (category: Category): CreateCategoryAction => ({
    type: CREATE_CATEGORY,
    category: { ...category }
})

export interface CreateCategorySuccessAction {
    type: string;
    category: Category;
}
export const createCategorySuccess = (response: Category): CreateCategorySuccessAction => ({
    type: CREATE_CATEGORY_SUCCESS,
    category: { ...response },
})

export interface CreateCategoryFailureAction {
    type: string;
    error: any;
}
export const createCategoryFailure = (error?: any): CreateCategoryFailureAction => ({
    type: CREATE_CATEGORY_FAILURE,
    error: error ? { ...error } : null,
})

export interface RemoveCategoryAction {
    type: string;
    category_id: string;
}
export const removeCategoryAction = (category_id: string): RemoveCategoryAction => ({
    type: REMOVE_CATEGORY,
    category_id
})

export interface RemoveCategorySuccessAction {
    type: string;
    categories: Category[];
}
export const removeCategorySuccess = (response: Category[]): RemoveCategorySuccessAction => ({
    type: REMOVE_CATEGORY_SUCCESS,
    categories: [ ...response ],
})

export interface RemoveCategoryFailureAction {
    type: string;
    error: any;
}
export const removeCategoryFailure = (error?: any): RemoveCategoryFailureAction => ({
    type: REMOVE_CATEGORY_FAILURE,
    error: error ? { ...error } : null,
})