import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addStoreToLocalStorage } from '../../helpers/localstorate';
import { addNewTransaction } from '../store/reducers/transaction';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(addNewTransaction),
    effect: (_action: any, listener: any) => {
        listener.cancelActiveListeners();
        addStoreToLocalStorage(listener.getState());
    },
});