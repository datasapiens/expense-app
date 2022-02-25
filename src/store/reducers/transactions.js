// ------------- Transactions -------------

// #1 Initial state
const initialState = [
  {
    id: 1,
    label: 'June income',
    date: '01/06/2022',
    amount: 5000,
    category: 'Salary',
  },
  {
    id: 2,
    label: 'July income',
    date: '01/07/2022',
    amount: 6000,
    category: 'Salary',
  },
  {
    id: 3,
    label: 'August Income',
    date: '01/08/2022',
    amount: 7000,
    category: 'Salary',
  },
  {
    id: 4,
    label: 'Sept Income',
    date: '01/09/2022',
    amount: 8000,
    category: 'Salary',
  },
  {
    id: 5,
    label: 'Oct income',
    date: '01/10/2022',
    amount: 5000,
    category: 'Salary',
  },
  {
    id: 6,
    label: 'Nov income',
    date: '01/11/2022',
    amount: 6000,
    category: 'Salary',
  },
  {
    id: 7,
    label: 'Dec Income',
    date: '01/12/2022',
    amount: 7000,
    category: 'Salary',
  },
  {
    id: 8,
    label: 'Jan Income',
    date: '01/01/2023',
    amount: 8000,
    category: 'Salary',
  },
]

// #2 Possible fixed Actions on the state
const addTransaction = value => ({ type: 'ADD_TRANSACTION', payload: value })
const addMultipleTransactions = value => ({ type: 'ADD_MULTIPLE_TRANSACTIONS', payload: value })
const resetTransactions = () => ({ type: 'RESET_TRANSACTIONS' })

// #3 Dispatch above actions with the help of reducers
function transactionsReducer(state = initialState, action) {
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
