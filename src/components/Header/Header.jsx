import styles from "./styles.module.css";
import Navigation from "../Navigation/Navigation";
// import { formatDate } from "../../helpers/formatDate()";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <p className={styles.date}>
        {formatDate(
          new Date(),
          "numeric",
          "numeric",
          "short",
          "numeric"
        ).toUpperCase()}
      </p> */}
      <Navigation />
    </header>
  );
};

export default Header;
