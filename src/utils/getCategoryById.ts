import Category from "../types/category";

const getCategoryById = (id: string, categories: Category[]) => categories.find((category) => category.id === id);


export default getCategoryById;