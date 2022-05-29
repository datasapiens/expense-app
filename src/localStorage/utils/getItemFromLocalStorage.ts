import { LocalStorageKeys } from 'src/enums/localStorageKeys.enum'

export const getItemFromLocalStorage = <T>(
    key: LocalStorageKeys
): T | undefined => {
    const item = localStorage.getItem(key)

    if (item) {
        return JSON.parse(item)
    }

    return undefined
}
