// for efficient category lookup
const flattenCategories = catArr => {
  let categoryFM = {}

  // all categories are (or should be) unique
  for (let i = 0; i < catArr.length; i++) {
    categoryFM[catArr?.[i]?.id] = catArr?.[i]?.label
    // {
    //  '1': Salary
    //  '2': Food
    // }
  }

  return categoryFM
}

export default flattenCategories
