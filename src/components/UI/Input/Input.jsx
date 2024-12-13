import { useState, useRef } from "react";
import styles from "./styles.module.css";

const Input = ({ task, onSave, inputNumber, isDisabled }) => {
  const [active, setActive] = useState(false);
  const [input, setinput] = useState(task || "");
  const inputRef = useRef(null);

  const onClickHandler = () => {
    setActive(true);
    inputRef.current.focus();
  };

  const onBlurHandler = (e) => {
    setActive(false);
    if (e.target.value.trim() !== "") onSave(e.target.value, inputNumber);
  };

  return (
    <input
      className={`${styles.input} ${active && styles.active}`}
      value={input}
      onChange={(e) => {
        setinput(e.target.value);
      }}
      onClick={onClickHandler}
      onBlur={onBlurHandler}
      disabled={isDisabled}
      ref={inputRef}
    />
  );
};

export default Input;
