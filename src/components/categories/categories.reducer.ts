import { CategoriesState } from "../../redux/initial-state.model";
import { CreateCategoryFailureAction, CreateCategorySuccessAction, CREATE_CATEGORY, CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_SUCCESS, GetCategoriesAction, GetCategoriesFailureAction, GetCategoriesSuccessAction, GET_CATEGORIES, GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS, RemoveCategoryFailureAction, RemoveCategorySuccessAction, REMOVE_CATEGORY, REMOVE_CATEGORY_FAILURE, REMOVE_CATEGORY_SUCCESS } from "./categories.actions";

type CategoriesAction = GetCategoriesAction | GetCategoriesSuccessAction | GetCategoriesFailureAction;

const categoriesReducer = (state: CategoriesState | null = null, action: CategoriesAction): Partial<CategoriesState> => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      }
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [...(action as GetCategoriesSuccessAction).categories],
        isLoading: false,
      }
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        error: (action as GetCategoriesFailureAction).error ? { ...(action as GetCategoriesFailureAction).error } : true,
        isLoading: false,
      }
    case CREATE_CATEGORY:
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state ? [...state.categories, (action as CreateCategorySuccessAction).category] : [(action as CreateCategorySuccessAction).category],
        isLoading: false,
      }
    case CREATE_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: (action as CreateCategoryFailureAction).error ? { ...(action as CreateCategoryFailureAction).error } : true,
      }
    case REMOVE_CATEGORY:
      return {
        ...state,
        isLoading: true,
      }
    case REMOVE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...(action as RemoveCategorySuccessAction).categories],
        isLoading: false,
      }
    case REMOVE_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: (action as RemoveCategoryFailureAction).error ? { ...(action as RemoveCategoryFailureAction).error } : true,
      }
    default:
      return {
        ...state,
      }
  }
};

export default categoriesReducer;