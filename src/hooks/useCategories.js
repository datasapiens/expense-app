import { useGlobalStore } from '../store'

import bindActions from '../store/bindActions'
import categoriesReducer from '../store/reducers/categories'

// Custom Hook to expose all the props and binded actions
const useCategories = () => {
  const { state, dispatch } = useGlobalStore()

  // List of Props
  const categories = state?.categories

  // List of Actions
  const addCategory = categoriesReducer?.actions?.addCategory
  const addMultipleCategories = categoriesReducer?.actions?.addMultipleCategories
  const resetCategories = categoriesReducer?.actions?.resetCategories

  // Bind all Actions to globalDispatch (important)
  const boundActions = bindActions(
    {
      addCategory,
      addMultipleCategories,
      resetCategories,
    },
    dispatch
  )

  // expose
  return { categories, ...boundActions }
}

export default useCategories
