import { useState } from "react";
import styles from "./styles.module.css";

const Input = ({ task }) => {
  const [input, setinput] = useState(null);

  return (
    <input
      className={styles.input}
      value={input ?? task}
      onInput={(e) => {
        setinput(e.target.value);
      }}
    />
  );
};

export default Input;
