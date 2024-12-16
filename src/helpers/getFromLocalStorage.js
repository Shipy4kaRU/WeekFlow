export const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? (value.startsWith("[") ? JSON.parse(value) : value) : null;
};
