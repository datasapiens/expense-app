import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addStoreToLocalStorage } from '../../helpers/localstorate';
import { addNewCategory } from '../store/reducers/categories.reducer';
import { addNewTransaction } from '../store/reducers/transaction.reducer';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(addNewTransaction, addNewCategory),
    effect: (_action: any, listener: any) => {
        listener.cancelActiveListeners();
        addStoreToLocalStorage(listener.getState());
    },
});


