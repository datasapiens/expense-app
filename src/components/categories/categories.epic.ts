import { ofType } from "redux-observable";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { CategoriesState, Category } from "../../redux/initial-state.model";
import { CreateCategoryAction, createCategoryFailure, createCategorySuccess, CREATE_CATEGORY, getCategoriesFailure, getCategoriesSuccess, GET_CATEGORIES, RemoveCategoryAction, removeCategoryFailure, removeCategorySuccess, REMOVE_CATEGORY } from "./categories.actions";
import { createCategoryRecord, getCategories, removeCategoryRecord } from "./category.helper";


const getCategoriesEpic = (action$: any) => action$.pipe(
  ofType(GET_CATEGORIES),
  mergeMap((action: CategoriesState) => getCategories().pipe(
    map((response: Category[]) => getCategoriesSuccess(response)),
    catchError((error: any) => of(getCategoriesFailure(error)))
  )
))

const createCategoryEpic = (action$: any) => action$.pipe(
  ofType(CREATE_CATEGORY),
  mergeMap((action: CreateCategoryAction) => createCategoryRecord(action.category).pipe(
    map((response: Category) => createCategorySuccess(response)),
    catchError((error: any) => of(createCategoryFailure(error)))
  )
))

const removeCategoryEpic = (action$: any) => action$.pipe(
  ofType(REMOVE_CATEGORY),
  mergeMap((action: RemoveCategoryAction) => removeCategoryRecord(action.category_id).pipe(
    map((response: Category[]) => removeCategorySuccess(response)),
    catchError((error: any) => of(removeCategoryFailure(error)))
  )
))

const categoriesEpics = [
  getCategoriesEpic,
  createCategoryEpic,
  removeCategoryEpic,
]

export default categoriesEpics;
