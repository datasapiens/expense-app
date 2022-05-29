import { LocalStorageKeys } from 'src/enums/localStorageKeys.enum'

export const setItemToLocalStorage = <T>(
    key: LocalStorageKeys,
    item: T
): void => {
    localStorage.setItem(key, JSON.stringify(item))
}
