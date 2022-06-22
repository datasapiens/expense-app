import { DashboardState } from "../../redux/initial-state.model";
import { BalanceByMonthAction, BalanceByMonthFailureAction, BalanceByMonthSuccessAction, BALANCE_BY_MONTH, BALANCE_BY_MONTH_FAILURE, BALANCE_BY_MONTH_SUCCESS, IncomeByCategoriesAction, IncomeByCategoriesFailureAction, IncomeByCategoriesSuccessAction, INCOME_BY_CATEGORIES, INCOME_BY_CATEGORIES_FAILURE, INCOME_BY_CATEGORIES_SUCCESS, OutcomeByCategoriesAction, OutcomeByCategoriesFailureAction, OutcomeByCategoriesSuccessAction, OUTCOME_BY_CATEGORIES, OUTCOME_BY_CATEGORIES_FAILURE, OUTCOME_BY_CATEGORIES_SUCCESS, } from "./dashboard.actions";


type DashboardAction = IncomeByCategoriesAction | IncomeByCategoriesSuccessAction | IncomeByCategoriesFailureAction
  | OutcomeByCategoriesAction | OutcomeByCategoriesSuccessAction | OutcomeByCategoriesFailureAction
  | BalanceByMonthAction | BalanceByMonthSuccessAction | BalanceByMonthFailureAction;

const dashboardReducer = (state: DashboardState | null, action: DashboardAction): Partial<DashboardState> => {
  switch (action.type) {
    case INCOME_BY_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      }
    case INCOME_BY_CATEGORIES_SUCCESS:
      return {
        ...state,
        incomeByCategoriesData: [...(action as IncomeByCategoriesSuccessAction).incomeByCategoriesData],
        isLoading: false,
      }
    case INCOME_BY_CATEGORIES_FAILURE:
      return {
        ...state,
        error: (action as IncomeByCategoriesFailureAction).error ? { ...(action as IncomeByCategoriesFailureAction).error } : true,
        isLoading: false,
      }
    case OUTCOME_BY_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      }
    case OUTCOME_BY_CATEGORIES_SUCCESS:
      return {
        ...state,
        outcomeByCategoriesData: [...(action as OutcomeByCategoriesSuccessAction).outcomeByCategoriesData],
        isLoading: false,
      }
    case OUTCOME_BY_CATEGORIES_FAILURE:
      return {
        ...state,
        error: (action as OutcomeByCategoriesFailureAction).error ? { ...(action as OutcomeByCategoriesFailureAction).error } : true,
        isLoading: false,
      }
    case BALANCE_BY_MONTH:
      return {
        ...state,
        isLoading: true,
      }
    case BALANCE_BY_MONTH_SUCCESS:
      return {
        ...state,
        balanceByMonthData: [...(action as BalanceByMonthSuccessAction).balanceByMonthData],
        isLoading: false,
      }
    case BALANCE_BY_MONTH_FAILURE:
      return {
        ...state,
        error: (action as BalanceByMonthFailureAction).error ? { ...(action as BalanceByMonthFailureAction).error } : true,
        isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}

export default dashboardReducer;