export const setLocalStorage = (key: string, value: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string): string => {
  return window.localStorage.getItem(key) || '';
};
