import { setItemToLocalStorage } from 'src/localStorage/utils/setItemToLocalStorage'
import { getItemFromLocalStorage } from 'src/localStorage/utils/getItemFromLocalStorage'
import { LocalStorageKeys } from 'src/enums/localStorageKeys.enum'
import { Transaction } from 'src/interfaces/transaction.interface'

export const getTransactionsFromLocalStorage = (): Transaction[] => {
    return (
        getItemFromLocalStorage<Transaction[]>(LocalStorageKeys.TRANSACTIONS) ||
        []
    )
}

export const setTransactionsToLocalStorage = (
    transactions: Transaction[]
): void => {
    setItemToLocalStorage(LocalStorageKeys.TRANSACTIONS, transactions)
}
