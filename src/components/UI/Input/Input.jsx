import { useState, useRef } from "react";
import styles from "./styles.module.css";
import svg from "../../../assets/svgSprite.svg";
import { useSelector } from "react-redux";

const Input = ({ task, onSave, onPassed, inputNumber, isDisabled, passed }) => {
  const isLoading = useSelector((state) => state.loading.calendar);
  const [input, setinput] = useState(task || "");
  const [isPassed, setIsPassed] = useState(passed);
  const inputRef = useRef(null);

  let isInputDisabled = false;
  if (isLoading || isDisabled) isInputDisabled = true;

  const onClickHandler = () => {
    inputRef.current.focus();
  };

  const onBlurHandler = (e) => {
    if (e.target.value.trim() !== "")
      onSave(e.target.value, inputNumber, isPassed);
  };

  const onPassedHandler = (text) => {
    onPassed(inputNumber, !isPassed, text);
    setIsPassed((state) => !state);
  };

  return (
    <div
      className={`${styles["input-container"]} ${isLoading && styles.loading}`}
    >
      <input
        className={`${styles.input} ${isPassed && styles.passed}`}
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
        onClick={onClickHandler}
        onBlur={onBlurHandler}
        disabled={isInputDisabled}
        ref={inputRef}
      />
      {!isDisabled && task && (
        <button
          className={styles.button}
          onClick={() => {
            onPassedHandler(inputRef.current.value);
          }}
        >
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
