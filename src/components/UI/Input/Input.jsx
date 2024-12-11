import styles from "./styles.module.css";

const Input = ({ text }) => {
  return <input className={styles.input} value={text} />;
};

export default Input;
