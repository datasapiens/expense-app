import { Category } from "../interfaces/category.interface";

export const getCategoryById = (id: string, categories: Category[] | undefined) => categories?.find((category) => category.id === id);
