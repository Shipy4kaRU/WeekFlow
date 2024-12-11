import styles from "./styles.module.css";
import { useState } from "react";
import sprite from "../../assets/svgSprite.svg";
import logo from "../../assets/logo.svg";
import bird from "../../assets/bird.svg";
import { useEffect } from "react";

const Login = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onToggleHandler = () => {
    setIsRegistration((state) => !state);
  };

  const onShowPasswordHandler = () => {
    setIsShowPassword((state) => !state);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const transformBird = {
    transform: `translate(${mousePosition.x * 0.03}px, ${
      mousePosition.y * 0.05
    }px) rotate(${mousePosition.x * 0.0008 - mousePosition.y * 0.0005}rad)`,
  };

  return (
    <section className={styles.login}>
      <div className={styles["image"]}>
        <img src={logo} alt="Логотип WeekFlow" className={styles.logo} />
        <img
          src={bird}
          alt="Птичка"
          className={styles.bird}
          style={transformBird}
        />
        <img
          src={bird}
          alt="Птичка"
          className={`${styles.bird} ${styles["bird--2"]}`}
          style={transformBird}
        />
        <p className={styles["image-text"]}>
          WeekFlow: упорядочи свою неделю, достигай своих целей!
        </p>
      </div>
      <form action="" className={styles.form}>
        <h1 className={styles.header}>
          {isRegistration ? "Создать аккаунт" : "Войти в аккаунт"}
        </h1>
        <label for="username" className={styles["form-label"]}>
          Имя пользователя
        </label>
        <input
          type="text"
          id="username"
          placeholder="UserName"
          className={`${styles.username} ${styles.input}`}
        />
        <label for="password" className={styles["form-label"]}>
          Пароль
        </label>
        <div className={styles["password-container"]}>
          <input
            type={isShowPassword ? "text" : "password"}
            id="password"
            placeholder="Password123"
            className={`${styles.password} ${styles.input}`}
          />
          <button
            className={styles["btn-show-password"]}
            onClick={onShowPasswordHandler}
          >
            <svg className={styles["password-icon"]}>
              <use
                href={`${sprite}#${isShowPassword ? "eye-open" : "eye-hidden"}`}
              />
            </svg>
          </button>
        </div>
        <div>
          <input type="checkbox" id="remember" className={styles.remember} />
          <label htmlFor="remember" className={styles["remember-label"]}>
            Запомнить меня
          </label>
        </div>
        <button type="submit" className={styles.submit}>
          {isRegistration ? "Зарегистрироваться" : "Войти"}
        </button>
        <p className={styles.islogged}>
          {isRegistration ? "Уже есть аккаунт?" : "Еще не зарегистрированы?"}
          <button className={styles.registration} onClick={onToggleHandler}>
            {isRegistration ? "Войти в аккаунт" : "Создать аккаунт"}
          </button>
        </p>
      </form>
    </section>

    // <DoubleContainer>
    //   <section className={styles.authorizate}>
    //     <form action="" className={styles.form}>
    //       <h1 className={styles.header}>
    //         {isRegistration ? "Регистрация" : "Вход"}
    //       </h1>
    //       <span className="visually-hidden">Введите имя пользователя</span>
    //       <input
    //         type="text"
    //         placeholder="Имя пользователя"
    //         className={styles.email}
    //       />
    //       <div className={styles["password-container"]}>
    //         <span className="visually-hidden">Введите пароль</span>
    //         <input
    //           type={isShowPassword ? "text" : "password"}
    //           placeholder="Пароль"
    //           className={styles.password}
    //         />
    //         <button
    //           className={styles["btn-show-password"]}
    //           onClick={onShowPasswordHandler}
    //         >
    //           <svg className={styles["password-icon"]}>
    //             <use
    //               href={`${sprite}#${
    //                 isShowPassword ? "eye-open" : "eye-hidden"
    //               }`}
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className={styles["remember-container"]}>
    //         <div>
    //           <input
    //             type="checkbox"
    //             id="remember"
    //             className={styles.remember}
    //           />
    //           <label htmlFor="remember" className={styles["remember-label"]}>
    //             Запомнить меня
    //           </label>
    //         </div>
    //       </div>
    //       <button type="submit" className={styles.submit}>
    //         {isRegistration ? "Зарегистрироваться" : "Войти"}
    //       </button>
    //       <p className={styles.text}>
    //         {isRegistration ? "Уже есть аккаунт?" : "Еще не зарегистрированы?"}
    //         <button className={styles.registration} onClick={onToggleHandler}>
    //           {isRegistration ? "Войти" : "Зарегистрироваться"}
    //         </button>
    //       </p>
    //     </form>
    //   </section>
    // </DoubleContainer>
  );
};

export default Login;
