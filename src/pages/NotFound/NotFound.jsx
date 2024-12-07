import styles from "./styles.module.css";
import DoubleContainer from "../../components/UI/DoubleContainer/DoubleContainer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <DoubleContainer>
      <section className={styles["page-404"]}>
        <h1 className={styles["page-404__header"]}>404</h1>
        <div className={styles["page-404__animation"]}></div>
        <p className={styles["page-404__text"]}>Похоже вы потерялись</p>
        <p className={styles["page-404__sub-text"]}>
          страница, которую вы ищете, недоступна!
        </p>
        <Link to="/home" className={styles.button}>
          Найти путь домой
        </Link>
      </section>
    </DoubleContainer>
  );
};

export default NotFound;
