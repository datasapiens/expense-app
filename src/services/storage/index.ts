import { AsyncStorage, cookieStorage } from './async-storage';


/**
 * Prepared async stores for specific things
 */
const asyncLocal = new AsyncStorage(window.localStorage);
const asyncCookie = new AsyncStorage(cookieStorage);
const asyncStorage = asyncLocal.isSupported ? asyncLocal : asyncCookie;

/**
 * Ready to use stores for specific things
 */
export const ApiCategoriesStorage = asyncStorage.bindToPath('categories');
export const ApiTransactionsStorage = asyncStorage.bindToPath('transactions');
export const ApiArchivedTransactionsStorage = asyncStorage.bindToPath('transactions-archived');
