// outsource dependencies
import _ from 'lodash';

// local dependencies

const environment = {
  SID: varString(process.env.REACT_APP_SID),
  NAME: varString(process.env.REACT_APP_NAME),
  DEBUG: varBoolean(process.env.REACT_APP_DEBUG),
  VERSION: varString(process.env.REACT_APP_VERSION),
  PRODUCTION: varBoolean(process.env.REACT_APP_PRODUCTION),
  DATE_FORMAT: varString(process.env.REACT_APP_DATE_FORMAT),
  TIME_FORMAT: varString(process.env.REACT_APP_TIME_FORMAT),
  DATE_TIME_FORMAT: varString(process.env.REACT_APP_DATE_FORMAT) + ' ' + varString(process.env.REACT_APP_TIME_FORMAT),
}

// NOTE addition ability to enable debugging
!environment.DEBUG && (environment.DEBUG = /show_DEBUG/.test(window.location.href));
// NOTE log config in debug mode at app starting
environment.DEBUG && console.info('%c CONFIG ', 'background: #EC1B24; color: #000; font-weight: bolder; font-size: 30px;'
  , '\n sid:', environment.SID
  , '\n config:', environment
);
/*
 * config is a function which allow to define defaults
 * @param {String} prop
 * @param {Any} defaults
 */
export const config = (prop: any, defaults?: any) => _.get(environment, prop, defaults);
config.all = () => Object.assign({}, environment);
/******************************************************
 *            variables parsers
 *****************************************************/
function varBoolean (value?: string) {
  return /^(true|1)$/i.test(value as string);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function varArray (value?: string) {
  return value ? value.split(',') : void 0;
}

function varString (value?: string) {
  return /^(null|undefined)$/i.test(value as string) ? void 0 : value;
}
