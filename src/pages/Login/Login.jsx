import styles from "./styles.module.css";
import DoubleContainer from "../../components/UI/DoubleContainer/DoubleContainer";
import { useState } from "react";
import sprite from "../../assets/svgSprite.svg";

const Login = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onToggleHandler = () => {
    setIsRegistration((state) => !state);
  };

  const onShowPasswordHandler = () => {
    setIsShowPassword((state) => !state);
  };

  return (
    <DoubleContainer>
      <section className={styles.authorizate}>
        <form action="" className={styles.form}>
          <h1 className={styles.header}>
            {isRegistration ? "Регистрация" : "Вход"}
          </h1>
          <span className="visually-hidden">Введите имя пользователя</span>
          <input
            type="text"
            placeholder="Имя пользователя"
            className={styles.email}
          />
          <div className={styles["password-container"]}>
            <span className="visually-hidden">Введите пароль</span>
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Пароль"
              className={styles.password}
            />
            <button
              className={styles["btn-show-password"]}
              onClick={onShowPasswordHandler}
            >
              <svg className={styles["password-icon"]}>
                <use
                  href={`${sprite}#${
                    isShowPassword ? "eye-open" : "eye-hidden"
                  }`}
                />
              </svg>
            </button>
          </div>
          <div className={styles["remember-container"]}>
            <div>
              <input
                type="checkbox"
                id="remember"
                className={styles.remember}
              />
              <label htmlFor="remember" className={styles["remember-label"]}>
                Запомнить меня
              </label>
            </div>
          </div>
          <button type="submit" className={styles.submit}>
            {isRegistration ? "Зарегистрироваться" : "Войти"}
          </button>
          <p className={styles.text}>
            {isRegistration ? "Уже есть аккаунт?" : "Еще не зарегистрированы?"}
            <button className={styles.registration} onClick={onToggleHandler}>
              {isRegistration ? "Войти" : "Зарегистрироваться"}
            </button>
          </p>
        </form>
      </section>
    </DoubleContainer>
  );
};

export default Login;
