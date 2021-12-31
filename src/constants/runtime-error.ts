
// outsource dependencies
import _ from 'lodash';
import { call } from 'redux-saga/effects';


// local dependencies
import { config } from './config';

/**
 * helper to simplify handling exception
 * @example
    yield call(silence, nonSafeAction, some, data);
    // or
    yield takeEvery(ACTION, silence, realActionHandlerExe);
 */
export function * silence (...args: any[]) {
  try {
    // @ts-ignore
    return yield call(...args);
  } catch (error) {
    const payload = args[1];
    const type = _.get(payload, 'type');
    // NOTE any common actions to handle error
    // @ts-ignore
    config('DEBUG', false) && console.info(`%c SILENCE ${error.message} `, 'color: #FF6766; font-weight: bolder; font-size: 12px;'
      , '\n payload:', payload
      , '\n type:', type
      , '\n all:', args
    );
    return void(0);
  }
}
