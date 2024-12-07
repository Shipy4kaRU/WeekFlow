import styles from "./styles.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};

export default Header;
