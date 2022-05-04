import {
  ITransaction,
  TransactionTypes,
  TransactionAction,
} from '../../types/transaction';

export interface TransactionState {
  transactions: ITransaction[];
}

const initialState: TransactionState = {
  transactions: [],
};

const transactionReducer = (
  state: TransactionState = initialState,
  action: TransactionAction
) => {
  switch (action.type) {
    case TransactionTypes.INITIALIZE_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case TransactionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case TransactionTypes.REMOVE_TRANSACTION:
      return {
        ...state,
        budgets: [
          ...state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

export default transactionReducer;
