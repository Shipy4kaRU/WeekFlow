import { useState, useRef } from "react";
import styles from "./styles.module.css";
import svg from "../../../assets/svgSprite.svg";

const Input = ({ task, onSave, onPassed, inputNumber, isDisabled, passed }) => {
  const [input, setinput] = useState(task || "");
  const [isPassed, setIsPassed] = useState(passed);
  const inputRef = useRef(null);

  const onClickHandler = () => {
    inputRef.current.focus();
  };

  const onBlurHandler = (e) => {
    if (e.target.value.trim() !== "")
      onSave(e.target.value, inputNumber, isPassed);
  };

  const onPassedHandler = () => {
    onPassed(inputNumber, !isPassed);
    setIsPassed((state) => !state);
  };

  return (
    <div className={styles[`input-container`]}>
      <input
        className={`${styles.input} ${isPassed && styles.passed}`}
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
        onClick={onClickHandler}
        onBlur={onBlurHandler}
        disabled={isDisabled}
        ref={inputRef}
      />
      {!isDisabled && task && (
        <button className={styles.button} onClick={onPassedHandler}>
          <span className="visually-hidden">Удалить задачу</span>
          <svg className={styles.icon}>
            <use href={`${svg}#check`} />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Input;
