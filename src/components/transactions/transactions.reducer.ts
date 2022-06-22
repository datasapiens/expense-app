import { TransactionState } from "../../redux/initial-state.model";
import { CREATE_CATEGORY_FAILURE } from "../categories/categories.actions";
import { CreateTransactionAction, CreateTransactionFailureAction, CreateTransactionSuccessAction, CREATE_TRANSACTION, CREATE_TRANSACTION_SUCCESS, GetTransactionsAction, GetTransactionsFailureAction, GetTransactionsSuccessAction, GET_TRANSACTIONS, GET_TRANSACTIONS_FAILURE, GET_TRANSACTIONS_SUCCESS } from "./transactions.actions";

type TransactionsActions =
  GetTransactionsAction |
  GetTransactionsSuccessAction |
  CreateTransactionAction |
  CreateTransactionSuccessAction |
  CreateTransactionFailureAction;

const transactionsReducer = (state: TransactionState | null = null, action: TransactionsActions): Partial<TransactionState> => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        isLoading: true,
      }
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactions: [...(action as GetTransactionsSuccessAction).transactions],
      }
    case GET_TRANSACTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: (action as GetTransactionsFailureAction).error ? { ...(action as GetTransactionsFailureAction).error } : true,
      }
    case CREATE_TRANSACTION:
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: state ? [ ...state.transactions, (action as CreateTransactionSuccessAction).transaction ]: [(action as CreateTransactionSuccessAction).transaction],
        isLoading: false,
      }
    case CREATE_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: (action as CreateTransactionFailureAction).error ? { ...(action as CreateTransactionFailureAction).error } : true,
      }
    default:
      return {
        ...state,
      }
  }
};

export default transactionsReducer;