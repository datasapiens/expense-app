export type CreatePromiseCallback = (arg0: unknown, arg1?: undefined) => void
export type ReturnPromiseType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;

// polyfill from MDN https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
/* istanbul ignore next */
export const cookieStorage = {
  getItem: (sKey: string) => (!cookieStorage.hasProperty(sKey) ? null
    : unescape(document.cookie.replace(
      new RegExp(`(?:^|.*;\\s*)${ escape(sKey).replace(/[-.+*]/g, '\\$&') }\\s*=\\s*((?:[^;](?!;))*[^;]?).*`),
      '$1'
    ))),
  setItem: (sKey: string, sValue: string) => (!sKey ? null
    : (document.cookie = `${escape(sKey) }=${ escape(sValue) }; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/`)) && null,
  removeItem: (sKey: string) => (!cookieStorage.hasProperty(sKey) ? null
    : (document.cookie = `${escape(sKey) }=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`)) && null,
  hasProperty: (sKey: string) => (!sKey ? false
    : (new RegExp(`(?:^|;\\s*)${ escape(sKey).replace(/[-.+*]/g, '\\$&') }\\s*\\=`)).test(document.cookie)),
};

type CookieStorageType = typeof cookieStorage;


export type AsyncStorageBindPath = {
  name: string;
  set: (value: any) => any;
  get: () => any;
  update: (value: any) => any;
  isSupported: boolean;
  remove: () => any
}

// @ts-ignore
const createPromise = (getValue: () => any, callback?: CreatePromiseCallback): ReturnPromiseType<any> => {
  return new Promise((resolve, reject) => {
    try {
      const value = getValue();
      if (callback) {
        callback(null, value);
      }
      resolve(value);
    } catch (errors) {
      callback && callback(errors)
      reject(errors);
    }
  });
};

export class AsyncStorage {
  store: globalThis.Storage | CookieStorageType;

  isSupported = true;

  constructor (store: globalThis.Storage | CookieStorageType) {
    this.store = store;

    try {
      const property = 'null';
      const value = '_test_store_by_storage_service';
      // NOTE check availability of storage
      // @ts-ignore
      this.store.setItem(property, value);
      // @ts-ignore
      const extracted = this.store.getItem(property);
      // @ts-ignore
      this.store.removeItem(property);
      if (extracted !== value) {
        throw new Error('Invalid "storage" behavior');
      }
    } catch (error) {
      this.isSupported = false;
      // console.error('%c Storage "not supported"', 'color: #FF6766; font-weight: bolder; font-size: 12px;'
      //   , '\n store:', store
      //   , '\n error:', error
      // );
    }
  }

  /**
   * Fetches `key` value.
   */
  get(name: string, callback?: CreatePromiseCallback): Promise<any> {
    return createPromise(() => {
      if (!this.isSupported) { return null; }
      // @ts-ignore
      const data = this.store.getItem(name);
      // console.log(data)
      try { // NOTE data can be simple string
        // @ts-ignore
        return JSON.parse(data);
      } catch (e) /* istanbul ignore next */ {
        return data;
      }
    }, callback);
  }

  /**
   * Sets `value` for `key`.
   */
  set(name: string, data: any, callback?: CreatePromiseCallback): Promise<any> {
    return createPromise(() => {
      if (!this.isSupported) { return null; }
      return this.remove(name).then(() => {
        this.store.setItem(name, JSON.stringify(data));
        return this.store.getItem(name);
      });
    }, callback);
  }

  /**
   * Removes a `key`
   */
  remove(name: string, callback?: CreatePromiseCallback): Promise<any> {
    return createPromise(() => {
      return this.isSupported && this.store.removeItem(name);
    }, callback);
  }

  /**
   * Merges existing value with input value, assuming they are stringified JSON.
   */
  update(name: string, data = {}, callback?: CreatePromiseCallback): Promise<any> {
    return createPromise(() => {
      if (!this.isSupported) { return null; }
      // NOTE working fine only with objects
      return this.get(name).then((prev) => {
        return this.set(name, Object.assign(prev, data))
      })
    }, callback);
  }

  /**
   * helper to simplify usage of storage binded to specific path
   * @example const TestStore = (new Storage(window.localStorage)).bindToPath('e');
   * @param {String} name
   * @return {{path: *, set: (function(*=): void), get: (function(): any)}}
   */
  bindToPath = (name: string): AsyncStorageBindPath => ({
    name,
    get: (): Promise<any> => {
      return this.get(name)
    },
    isSupported: this.isSupported,
    remove: () => this.remove(name),
    set: value => this.set(name, value),
    update: value => this.update(name, value),
  });
}
