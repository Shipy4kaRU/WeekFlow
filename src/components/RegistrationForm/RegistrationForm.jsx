import { useState } from "react";
import { useDispatch } from "react-redux";
import sprite from "../../assets/svgSprite.svg";
import { accountActions } from "../../store/accountSlice";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

const RegistrationForm = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();

  //использование react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onToggleHandler = () => {
    setIsRegistration((state) => !state);
  };

  const onShowPasswordHandler = () => {
    setIsShowPassword((state) => !state);
  };

  const onLoginHandler = () => {
    if (!isRegistration) dispatch(accountActions.setAccountData({}));
  };

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <form
      action=""
      className={styles.form}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h1 className={styles.header}>
        {isRegistration ? "Создать аккаунт" : "Войти в аккаунт"}
      </h1>
      <div className={styles.container}>
        <label htmlFor="username" className={styles["form-label"]}>
          Имя пользователя
        </label>
        <input
          type="text"
          id="username"
          placeholder="UserName"
          className={`${styles.username} ${styles.input} ${
            errors.username && styles["error-input"]
          }`}
          {...register("username")}
        />
        {errors.username && (
          <p className={styles.error}>{`${errors.username.message}*`}</p>
        )}
      </div>
      <label htmlFor="password" className={styles["form-label"]}>
        Пароль
      </label>
      <div className={styles["password-container"]}>
        <input
          type={isShowPassword ? "text" : "password"}
          id="password"
          placeholder="Password123"
          className={`${styles.password} ${styles.input} ${
            errors.password && styles["error-input"]
          }`}
          {...register("password")}
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
        {errors.password && (
          <p className={styles.error}>{`${errors.password.message}*`}</p>
        )}
      </div>
      <div>
        <input type="checkbox" id="remember" className={styles.remember} />
        <label htmlFor="remember" className={styles["remember-label"]}>
          Запомнить меня
        </label>
      </div>
      <button type="submit" className={styles.submit} onClick={onLoginHandler}>
        {isRegistration ? "Зарегистрироваться" : "Войти"}
      </button>
      <p className={styles.islogged}>
        {isRegistration ? "Уже есть аккаунт?" : "Еще не зарегистрированы?"}
        <button className={styles.registration} onClick={onToggleHandler}>
          {isRegistration ? "Войти в аккаунт" : "Создать аккаунт"}
        </button>
      </p>
    </form>
  );
};

export default RegistrationForm;
