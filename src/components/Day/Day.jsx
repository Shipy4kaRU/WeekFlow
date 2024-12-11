import styles from "./styles.module.css";
import Input from "../UI/Input/Input";

const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const startDays = (
  <>
    <Input></Input>
    <Input></Input>
    <Input></Input>
    <Input></Input>
  </>
);

const Day = ({ date, active, data }) => {
  const difference = data.length === 0 ? "" : 4 - data.length;

  return (
    <div className={styles.day}>
      <div
        className={`${styles["date-container"]} ${active ? styles.active : ""}`}
      >
        <p className={styles.date}>{`${date.getDate()}.${date.getMonth()}`}</p>
        <p className={styles.weekDay}>{weekDays[date.getDay()]}</p>
      </div>
      {!data.length
        ? startDays
        : data.map((el, index) => <Input key={index} task={el}></Input>)}
      <Input></Input>
      {difference > 0
        ? new Array(difference)
            .fill(null)
            .map((el, index) => <Input key={index}></Input>)
        : ""}
    </div>
  );
};

export default Day;
