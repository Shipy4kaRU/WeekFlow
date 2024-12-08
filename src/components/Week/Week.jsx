import styles from "./styles.module.css";
import Day from "../Day/Day";
import { useEffect, useState } from "react";
import { WEEK_DAYS } from "../../constants/WEEK_DAYS";
import { addDays } from "../../helpers/addDays";
import { subtractDays } from "../../helpers/substractDays";

const Week = () => {
  const [updatedWEEK_DAYS, setUpdatedWEEK_DAYS] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const usaWeekDay = currentDate.getDay();
    let ruWeekDay;
    if (usaWeekDay === 0) ruWeekDay = 6;
    else ruWeekDay = usaWeekDay - 1;
    const updatedWEEK_DAYS = WEEK_DAYS.map((el, index) => {
      return {
        date:
          ruWeekDay > index
            ? subtractDays(new Date(), ruWeekDay - index)
            : addDays(new Date(), index - ruWeekDay),
        active: ruWeekDay === index,
      };
    });
    setUpdatedWEEK_DAYS(updatedWEEK_DAYS);
  }, []);

  return (
    <section className={styles.week}>
      {updatedWEEK_DAYS.map((el) => (
        <Day key={el.date.getDay()} active={el.active} date={el.date} />
      ))}
    </section>
  );
};

export default Week;
