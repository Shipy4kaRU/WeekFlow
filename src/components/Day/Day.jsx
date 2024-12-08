import styles from "./styles.module.css";
import Input from "../UI/Input/Input";

// #39ad31

const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const Day = ({ date, active }) => {
  return (
    <div className={styles.day}>
      <div
        className={`${styles["date-container"]} ${active ? styles.active : ""}`}
      >
        <p className={styles.date}>{`${date.getDate()}.${date.getMonth()}`}</p>
        <p className={styles.weekDay}>{weekDays[date.getDay()]}</p>
      </div>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </div>
  );
};

export default Day;
