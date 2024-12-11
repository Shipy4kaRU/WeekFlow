import styles from "./styles.module.css";
import svg from "../../../assets/svgSprite.svg";
import { useState } from "react";

const ChangeInfo = ({ text, onSubmit }) => {
  const [input, setInput] = useState("");

  const onInputHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = () => {
    onSubmit(input);
    setInput("");
  };

  return (
    <form className={styles["form"]} onSubmit={onSubmitHandler}>
      <label for="text" className={styles.text}>
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
