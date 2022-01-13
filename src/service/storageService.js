// let accessToken = "access_token";

const clearItem = (param) => {
  localStorage.removeItem(param);
};
const setItem = (name, payload) => {
  localStorage.setItem(name, payload);
};

const clearStorage = () => {
  localStorage.clear();
};
const getItem = (param) => {
  return localStorage.getItem(param);
};

export default {
  clearItem,
  setItem,
  clearStorage,
  getItem,
};
