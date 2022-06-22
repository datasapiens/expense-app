import { delay, Observable, of } from "rxjs";
import { Category, CategoryLabel, Transaction } from "../../redux/initial-state.model";
import { get, save } from "../../utils/storage.utils";
import { TRANSACTIONS_KEY } from "../transactions/transactions.helper";

const CATEGORIES_KEY = 'categories';


export const findCategoryById = (categories: Category[], category_id: string): Category | undefined => {
  const category: Category | undefined = categories.find((category: Category) => category.category_id === category_id);
  return category;
}

export const findCategoryIdByLabel = (categories: Category[], categoryLabel: string): string | undefined => {
  const category_id: string | undefined = categories.find((category: Category) => category.label.toLowerCase() === categoryLabel.toLowerCase())?.category_id;
  return category_id;
}

export const generateColor = () => {
  const red = Math.floor(Math.random() * 200);
  const green = Math.floor(Math.random() * 200);
  const blue = Math.floor(Math.random() * 200);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

export const getCategories = (): Observable<Category[]> => {

  const categories = get({ key: CATEGORIES_KEY});

  if(categories && categories.length) {
    return of(categories).pipe( delay(1000));
  }

  const initialCategories = Object.values(CategoryLabel).map((category, index) => ({
    category_id: `${index}`,
    label: category,
    removable: category !== CategoryLabel.OTHER,
    color: generateColor(),
  }));

  const success = save({ key: CATEGORIES_KEY, value: initialCategories});
  if(success) {
    return of(initialCategories).pipe(delay(1000));
  }

  throw (Error('Error when storing categories'));
}

export const createCategoryRecord = (category: Category): Observable<Category> => {
  const categories: Category[] = get({key: CATEGORIES_KEY});
  const newCategory: Category = { ...category, category_id: `${categories.length}`, color: generateColor()};
  const newCategories = [ ...categories, newCategory ];
  const success = save({ key: CATEGORIES_KEY, value: newCategories});

  if(success) {
    return of(newCategory).pipe(delay(1000));
  }

  throw(Error('Category not created'));
}

export const removeCategoryRecord = (category_id: string): Observable<Category[]> => {
  const currentCategories: Category[] = get({key: CATEGORIES_KEY});
  const currentTransactions: Transaction[] | null = get({ key: TRANSACTIONS_KEY });
  const OTHER_CATEGORY = currentCategories.find((category) => category.label.toLowerCase() === 'other'.toLowerCase());
  const OTHER_CATEGORY_ID = OTHER_CATEGORY ? OTHER_CATEGORY.category_id : '1';

  const newCategories = currentCategories.filter((category) => category.category_id !== category_id);
  let success = save({ key: CATEGORIES_KEY, value: newCategories});

  if(success) {
    const newTransactions = currentTransactions ? currentTransactions.map((transaction) => ({
      ...transaction,
      category_id: transaction.category_id === category_id ? OTHER_CATEGORY_ID : transaction.category_id,
    })) : [];

    success = save({ key: TRANSACTIONS_KEY, value: newTransactions});

    if(success) {
      return of(newCategories).pipe(delay(1000));
    }

    throw(Error('Category not removed'))
  }

  throw(Error('Category not removed'));

}