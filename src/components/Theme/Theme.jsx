import styles from "./styles.module.css";
import svg from "../../assets/svgSprite.svg";

const Theme = () => {
  return (
    <div className={styles.theme}>
      <p className={styles.text}>Режим темы:</p>
      <button className={styles.btn}>
        <svg className={styles.icon}>
          <use href={`${svg}#sun`} />
        </svg>
      </button>
      <button className={styles.btn}>
        <svg className={styles.icon}>
          <use href={`${svg}#moon`} />
        </svg>
      </button>
    </div>
  );
};

export default Theme;
