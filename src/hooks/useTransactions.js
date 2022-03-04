import { useGlobalStore } from '../store'

import bindActions from '../store/bindActions'
import transactionsReducer from '../store/reducers/transactions'

// Custom Hook to expose all the props and binded actions
const useTransactions = () => {
  const { state, dispatch } = useGlobalStore()

  // List of Props
  const transactions = state?.transactions

  // List of Actions
  const addTransaction = transactionsReducer?.actions?.addTransaction
  const addMultipleTransactions = transactionsReducer?.actions?.addMultipleTransactions
  const resetTransactions = transactionsReducer?.actions?.resetTransactions

  // Bind all Actions to globalDispatch (important)
  const boundActions = bindActions(
    {
      addTransaction,
      addMultipleTransactions,
      resetTransactions,
    },
    dispatch
  )

  // expose
  return { transactions, ...boundActions }
}

export default useTransactions
