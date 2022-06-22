import { ofType } from "redux-observable";
import { catchError, map, mergeMap, of } from "rxjs";
import { BalanceByMonthData, IncomeByCategoriesData, OutcomeByCategoriesData } from "../../redux/initial-state.model";
import { IncomeByCategoriesAction, INCOME_BY_CATEGORIES, incomeByCategoriesSuccess, incomeByCategoriesFailure, OUTCOME_BY_CATEGORIES, OutcomeByCategoriesAction, outcomeByCategoriesSuccess, outcomeByCategoriesFailure, BALANCE_BY_MONTH, BalanceByMonthAction, balanceByMonthSuccessAction, balanceByMonthFailureAction } from "./dashboard.actions";
import { calcIncomeByCategories, calcOutcomeByCategories, calculateBalanceByMonth } from "./dashboard.helper";


const getIncomeByCategoriesEpic = (action$: any, state$: any) => action$.pipe(
  ofType(INCOME_BY_CATEGORIES),
  mergeMap((action: IncomeByCategoriesAction) => 
    calcIncomeByCategories({
      categories: state$.value.categoriesState.categories,
      transactions: state$.value.transactionState.transactions,
    }).pipe(
    map((response: IncomeByCategoriesData[]) => incomeByCategoriesSuccess(response)),
    catchError((error: any) => of(incomeByCategoriesFailure(error)))
  )
))

const getOutcomeByCategoriesEpic = (action$: any, state$: any) => action$.pipe(
  ofType(OUTCOME_BY_CATEGORIES),
  mergeMap((action: OutcomeByCategoriesAction) => 
    calcOutcomeByCategories({
      categories: state$.value.categoriesState.categories,
      transactions: state$.value.transactionState.transactions,
    }).pipe(
    map((response: OutcomeByCategoriesData[]) => outcomeByCategoriesSuccess(response)),
    catchError((error: any) => of(outcomeByCategoriesFailure(error)))
  )
))

const getBalanceByMonth = (action$: any, state$: any) => action$.pipe(
  ofType(BALANCE_BY_MONTH),
  mergeMap((action: BalanceByMonthAction) => 
    calculateBalanceByMonth({
      transactions: state$.value.transactionState.transactions,
    }).pipe(
    map((response: BalanceByMonthData[]) => balanceByMonthSuccessAction(response)),
    catchError((error: any) => of(balanceByMonthFailureAction(error)))
  )
))

const dashboardEpics = [
  getIncomeByCategoriesEpic,
  getOutcomeByCategoriesEpic,
  getBalanceByMonth,
]

export default dashboardEpics;