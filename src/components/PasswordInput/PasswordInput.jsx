import styles from "./styles.module.css";
import sprite from "../../assets/svgSprite.svg";
import { useState } from "react";

const PasswordInput = ({ errors, register }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onShowPasswordHandler = () => {
    setIsShowPassword((state) => !state);
  };

  return (
    <div className={styles["password-container"]}>
      <label htmlFor="password" className={styles["form-label"]}>
        Пароль
      </label>
      <input
        type={isShowPassword ? "text" : "password"}
        id="password"
        placeholder="Password%123"
        className={`${styles.password} ${styles.input} ${
          errors.password && styles["error-input"]
        }`}
        {...register("password")}
      />
      <button
        className={styles["btn-show-password"]}
        type="button"
        onClick={onShowPasswordHandler}
      >
        <svg className={styles["password-icon"]}>
          <use
            href={`${sprite}#${isShowPassword ? "eye-open" : "eye-hidden"}`}
          />
        </svg>
      </button>
      {errors.password && (
        <p className={styles.error}>{`${errors.password.message}*`}</p>
      )}
    </div>
  );
};

export default PasswordInput;
