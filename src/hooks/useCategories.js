import { useGlobalStore } from '../store'

import bindActions from '../store/bindActions'
import categoriesReducer from '../store/reducers/categories'

// Custom Hook to expose all the props and binded actions
const useCategories = () => {
  const { state, dispatch } = useGlobalStore()

  // List of Props
  const { categories, categoryFM } = state?.categories

  // List of Actions
  const addCategory = categoriesReducer?.actions?.addCategory
  const removeCategory = categoriesReducer?.actions?.removeCategory
  const resetCategories = categoriesReducer?.actions?.resetCategories
  const addMultipleCategories = categoriesReducer?.actions?.addMultipleCategories

  // Bind all Actions to globalDispatch (important)
  const boundActions = bindActions(
    {
      addCategory,
      removeCategory,
      resetCategories,
      addMultipleCategories,
    },
    dispatch
  )

  // expose
  return { categories, categoryFM, ...boundActions }
}

export default useCategories
