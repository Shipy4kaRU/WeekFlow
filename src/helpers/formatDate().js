export const formatDate = (
  date,
  yearFormat,
  monthFormat,
  WeekdayFormat,
  DayFormat
) => {
  const options = {
    year: yearFormat,
    month: monthFormat,
    weekday: WeekdayFormat,
    day: DayFormat,
  };
  return date.toLocaleDateString("ru-RU", options);
};
