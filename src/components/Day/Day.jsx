import styles from "./styles.module.css";
import Input from "../UI/Input/Input";

const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const Day = ({ date, active, data, onSave, onPassed }) => {
  const difference = data.length && 4 - data.length;
  const startDays = new Array(4).fill("");

  return (
    <div className={styles.day}>
      <div
        className={`${styles["date-container"]} ${active ? styles.active : ""}`}
      >
        <p className={styles.date}>{`${date.getDate()}.${
          date.getMonth() + 1
        }`}</p>
        <p className={styles.weekDay}>{weekDays[date.getDay()]}</p>
      </div>
      {!data.length
        ? startDays.map((el, index) => (
            <Input
              key={index++}
              task={el.text}
              passed={el.isPassed}
              onPassed={onPassed}
              onSave={onSave}
              inputNumber={index}
              isDisabled={index++ > data.length ? true : false}
            ></Input>
          ))
        : data.map((el, index) => (
            <Input
              key={index++}
              task={el.text}
              passed={el.isPassed}
              onPassed={onPassed}
              onSave={onSave}
              inputNumber={index}
              isDisabled={index > data.length ? true : false}
            ></Input>
          ))}
      <Input
        key={data.length}
        onSave={onSave}
        inputNumber={data.length}
        isDisabled={data.length === 0 ? true : false}
      ></Input>
      {difference > 0 &&
        new Array(difference)
          .fill(null)
          .map((el, index) => (
            <Input
              key={index + data.length + 1}
              onSave={onSave}
              inputNumber={index + data.length + 1}
              isDisabled={index + data.length + 1 > data.length ? true : false}
            ></Input>
          ))}
    </div>
  );
};

export default Day;
