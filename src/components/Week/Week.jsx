import styles from "./styles.module.css";
import Day from "../Day/Day";

const Week = () => {
  return (
    <section className={styles.week}>
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </section>
  );
};

export default Week;
