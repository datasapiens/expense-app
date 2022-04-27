import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import type { RootState } from 'store/type';
import { addCategory, deleteCategory } from 'store/category/actions';
import { addTransaction } from 'store/transaction/actions';

export const listenerMiddleware = createListenerMiddleware();

// Middleware to listen to our state and update relevant IDs on
// normalize state.
listenerMiddleware.startListening({
  matcher: isAnyOf(addCategory, deleteCategory, addTransaction),
  effect: (_action, listener) => {
    listener.cancelActiveListeners();

    const { entities } = listener.getState() as RootState;

    localStorage.setItem('categories', JSON.stringify(entities.categories));
    localStorage.setItem('transactions', JSON.stringify(entities.transactions));
  },
});
