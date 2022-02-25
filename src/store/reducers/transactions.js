// ------------- Transactions -------------

// #1 Initial state
const initialState = []

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
