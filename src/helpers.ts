import { CATEGORIES, TRANSACTIONS } from './data'

/**
 * Local storage set helper
 */
export const localStorageSet = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Local storage get helper
 * checks for possible undefined get
 */
export const localStorageGet = (key: string): string | null => {
  const item = localStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  }
  return null
}

/**
 * Initialises seed data in the app
 */
export const initData = (): void => {
  if (!localStorageGet('categories')) {
    localStorageSet('categories', CATEGORIES)
  }

  if (!localStorageGet('transactions')) {
    localStorageSet('transactions', TRANSACTIONS)
  }
}
