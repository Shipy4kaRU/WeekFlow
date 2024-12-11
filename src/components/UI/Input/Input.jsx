import styles from "./styles.module.css";

const Input = ({ task }) => {
  return <input className={styles.input} value={task} />;
};

export default Input;
