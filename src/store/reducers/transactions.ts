// ------------- Transactions -------------

export interface Transaction {
  id: number
  label: string
  date: string
  amount: number
  categoryId: number
}

export interface TransactionAction {
  type: 'ADD_TRANSACTION' | 'ADD_MULTIPLE_TRANSACTIONS' | 'RESET_TRANSACTIONS'
  payload?: any
}

// #1 Initial state
const initialState: Transaction[] = [
  {
    id: 1,
    label: 'June income',
    date: '01/06/2022',
    amount: 5000,
    categoryId: 1,
  },
  {
    id: 2,
    label: 'July income',
    date: '01/07/2022',
    amount: 6000,
    categoryId: 1,
  },
  {
    id: 3,
    label: 'August Income',
    date: '01/08/2022',
    amount: 7000,
    categoryId: 1,
  },
  {
    id: 4,
    label: 'Sept Income',
    date: '01/09/2022',
    amount: 8000,
    categoryId: 1,
  },
  {
    id: 5,
    label: 'Oct income',
    date: '01/10/2022',
    amount: 5000,
    categoryId: 1,
  },
  {
    id: 6,
    label: 'Nov income',
    date: '01/11/2022',
    amount: 6000,
    categoryId: 1,
  },
  {
    id: 7,
    label: 'Dec Income',
    date: '01/12/2022',
    amount: 7000,
    categoryId: 1,
  },
  {
    id: 8,
    label: 'Jan Income',
    date: '01/01/2023',
    amount: 8000,
    categoryId: 1,
  },
]

// #2 Possible fixed Actions on the state
const addTransaction = (value: Transaction): TransactionAction => ({
  type: 'ADD_TRANSACTION',
  payload: value,
})
const addMultipleTransactions = (value: Transaction[]): TransactionAction => ({
  type: 'ADD_MULTIPLE_TRANSACTIONS',
  payload: value,
})
const resetTransactions = (): TransactionAction => ({ type: 'RESET_TRANSACTIONS' })

// #3 Dispatch above actions with the help of reducers
function transactionsReducer(state = initialState, action): Transaction[] {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state, action?.payload]
    case 'ADD_MULTIPLE_TRANSACTIONS':
      return [...state, ...action?.payload]
    case 'RESET_TRANSACTIONS':
      return { ...initialState }

    default:
      return state
  }
}

export default {
  initialState,
  actions: {
    addTransaction,
    addMultipleTransactions,
    resetTransactions,
  },
  reducer: transactionsReducer,
}
