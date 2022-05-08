// import { CategoryFlatMap } from '../store/reducers/categories'

// for efficient category lookup
const flattenCategories = catArr => {
  let categoryFlatMap = {}

  // all categories are (or should be) unique
  for (let i = 0; i < catArr.length; i++) {
    categoryFlatMap[catArr?.[i]?.id] = catArr?.[i]?.label
    // {
    //  '1': Salary
    //  '2': Food
    // }
  }

  return categoryFlatMap
}

export default flattenCategories
