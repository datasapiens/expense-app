import { Middleware } from '@reduxjs/toolkit';
import { APP_STATE_KEY } from '../../constants';

/**
 * Dumps state to localstorage.
 */
const persister: Middleware<Record<string, unknown>, unknown> =
  store => next => action => {
    const res = next(action);
    const nextState = store.getState();
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(nextState));
    return res;
  };

export default persister;
