import Week from "../../components/Week/Week";
import styles from "./styles.module.css";
import { formatDate } from "../../helpers/formatDate()";

const Calendar = () => {
  return (
    <section className={styles.home}>
      <h1 className="visually-hidden">Календарь</h1>
      <p className={styles.date}>
        {formatDate(
          new Date(),
          "numeric",
          "long",
          "short",
          "numeric"
        ).toUpperCase()}
      </p>
      <Week></Week>
    </section>
  );
};

export default Calendar;
