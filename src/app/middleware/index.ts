import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addNewCategory, removeCategory } from '../../store/reducers/categories';
import { addNewTransaction, updateTransactions } from '../../store/reducers/transactions';
import { addStoreToLocalStorage } from '../../utils/localstorage';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(addNewCategory, removeCategory, addNewTransaction, updateTransactions),
    effect: (_action, listener) => {
        listener.cancelActiveListeners();
        addStoreToLocalStorage(listener.getState());
    },
});