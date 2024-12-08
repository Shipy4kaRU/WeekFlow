export const addDays = (date, days) => {
  const newDate = new Date(date); // Создаем новый объект Date
  newDate.setDate(newDate.getDate() + days); // Прибавляем дни
  return newDate;
};
