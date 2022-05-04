export const filterByField = <T, K extends keyof T>(
  value: string,
  targetField: K,
  targetArray: T[]
) => targetArray.filter((item) => item[targetField] === (value as any));

export const getLocalStorageValue = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);

export const setLocalStorageValue = <T>(key: string, value: T) =>
  localStorage.setItem(key, JSON.stringify(value));
