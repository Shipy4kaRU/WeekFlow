import styles from "./styles.module.css";
import svg from "../../../assets/svgSprite.svg";
import { useState } from "react";

const ChangeInfo = ({ text, onSubmit, startValue }) => {
  const [input, setInput] = useState(startValue);

  const onInputHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = () => {
    onSubmit(input);
  };

  return (
    <form className={styles["form"]} onSubmit={onSubmitHandler}>
      <label htmlFor="text" className={styles.text}>
        {text}
      </label>
      <input
        id={text}
        type="text"
        className={styles.input}
        required
        onInput={onInputHandler}
        value={input}
      />
      <button type="submit" className={styles.button}>
        <svg className={styles.icon}>
          <use href={`${svg}#check`} />
        </svg>
      </button>
    </form>
  );
};

export default ChangeInfo;
