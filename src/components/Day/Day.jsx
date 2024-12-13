import styles from "./styles.module.css";
import Input from "../UI/Input/Input";

const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const Day = ({ date, active, data, onSave }) => {
  const difference = data.length === 0 ? false : 4 - data.length + 1;
  const startDays = new Array(5).fill("");

  return (
    <div className={styles.day}>
      <div
        className={`${styles["date-container"]} ${active ? styles.active : ""}`}
      >
        <p className={styles.date}>{`${date.getDate()}.${date.getMonth()}`}</p>
        <p className={styles.weekDay}>{weekDays[date.getDay()]}</p>
      </div>
      {!data.length
        ? startDays.map((el, index) => (
            <Input
              key={index++}
              task={el}
              onSave={onSave}
              inputNumber={index}
              isDisabled={index++ > data.length ? true : false}
            ></Input>
          ))
        : data.map((el, index) => (
            <Input
              key={index++}
              task={el}
              onSave={onSave}
              inputNumber={index}
              isDisabled={index > data.length ? true : false}
            ></Input>
          ))}
      {Boolean(difference) &&
        new Array(difference)
          .fill(null)
          .map((el, index) => (
            <Input
              key={index + data.length}
              onSave={onSave}
              inputNumber={index + data.length}
              isDisabled={index + data.length > data.length ? true : false}
            ></Input>
          ))}
    </div>
  );
};

export default Day;
