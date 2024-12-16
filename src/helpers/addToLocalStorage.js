export const addToLocalStorage = (key, value) => {
  const valueToStore =
    typeof value === "object" ? JSON.stringify(value) : value;
  localStorage.setItem(key, valueToStore);
};
