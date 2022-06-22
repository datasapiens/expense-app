import { BalanceByMonthData, IncomeByCategoriesData, OutcomeByCategoriesData } from "../../redux/initial-state.model";

export const INCOME_BY_CATEGORIES = 'INCOME_BY_CATEGORIES';
export const INCOME_BY_CATEGORIES_SUCCESS = 'INCOME_BY_CATEGORIES_SUCCESS';
export const INCOME_BY_CATEGORIES_FAILURE = 'INCOME_BY_CATEGORIES_FAILURE';

export const OUTCOME_BY_CATEGORIES = 'OUTCOME_BY_CATEGORIES';
export const OUTCOME_BY_CATEGORIES_SUCCESS = 'OUTCOME_BY_CATEGORIES_SUCCESS';
export const OUTCOME_BY_CATEGORIES_FAILURE = 'OUTCOME_BY_CATEGORIES_FAILURE';

export const BALANCE_BY_MONTH = 'BALANCE_BY_MONTH';
export const BALANCE_BY_MONTH_SUCCESS = 'BALANCE_BY_MONTH_SUCCESS';
export const BALANCE_BY_MONTH_FAILURE = 'BALANCE_BY_MONTH_FAILURE';


export interface IncomeByCategoriesAction {
  type: string;
}
export const incomeByCategories = (): IncomeByCategoriesAction => ({
  type: INCOME_BY_CATEGORIES,
})

export interface IncomeByCategoriesSuccessAction {
  type: string;
  incomeByCategoriesData: IncomeByCategoriesData[];
}
export const incomeByCategoriesSuccess = (incomeByCategoriesData: IncomeByCategoriesData[]): IncomeByCategoriesSuccessAction => ({
  type: INCOME_BY_CATEGORIES_SUCCESS,
  incomeByCategoriesData,
})

export interface IncomeByCategoriesFailureAction {
  type: string;
  error: any;
}
export const incomeByCategoriesFailure = (error: any): IncomeByCategoriesFailureAction => ({
  type: INCOME_BY_CATEGORIES_FAILURE,
  error
})

export interface OutcomeByCategoriesAction {
  type: string;
}
export const outcomeByCategories = (): OutcomeByCategoriesAction => ({
  type: OUTCOME_BY_CATEGORIES,
})

export interface OutcomeByCategoriesSuccessAction {
  type: string;
  outcomeByCategoriesData: OutcomeByCategoriesData[]
}
export const outcomeByCategoriesSuccess = (outcomeByCategoriesData: OutcomeByCategoriesData[]): OutcomeByCategoriesSuccessAction => ({
  type: OUTCOME_BY_CATEGORIES_SUCCESS,
  outcomeByCategoriesData
})

export interface OutcomeByCategoriesFailureAction {
  type: string;
  error: any;
}
export const outcomeByCategoriesFailure = (error: any): OutcomeByCategoriesFailureAction => ({
  type: OUTCOME_BY_CATEGORIES_FAILURE,
  error
})

export interface BalanceByMonthAction {
  type: string;
}
export const balanceByMonthAction = (): BalanceByMonthAction => ({
  type: BALANCE_BY_MONTH,
})

export interface BalanceByMonthSuccessAction {
  type: string;
  balanceByMonthData: BalanceByMonthData[]
}
export const balanceByMonthSuccessAction = (balanceByMonthData: BalanceByMonthData[]): BalanceByMonthSuccessAction => ({
  type: BALANCE_BY_MONTH_SUCCESS,
  balanceByMonthData
})

export interface BalanceByMonthFailureAction {
  type: string;
  error: any;
}
export const balanceByMonthFailureAction = (error: any): BalanceByMonthFailureAction => ({
  type: BALANCE_BY_MONTH_FAILURE,
  error
})