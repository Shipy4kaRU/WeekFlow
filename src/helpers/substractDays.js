export const subtractDays = (date, days) => {
  const newDate = new Date(date); // Создаем новый объект Date
  newDate.setDate(newDate.getDate() - days); // Вычитаем дни
  return newDate;
};
