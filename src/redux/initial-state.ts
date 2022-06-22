import { InitialState } from "./initial-state.model";

const initialState: InitialState = {
  transactionState: {
    transactions: [],
    isLoading: false,
    error: null,
  },
  categoriesState: {
    categories: [],
    error: null,
    isLoading: false,
  },
  dashboardState: {
    incomeByCategoriesData: [],
    outcomeByCategoriesData: [],
    balanceByMonthData: [],
    error: null,
    isLoading: false,
  }
}

export default initialState;