import { useState } from "react";
import { useDispatch } from "react-redux";
import { accountActions } from "../../store/accountSlice";
import { isLoggedAction } from "../../store/isLoggedSlice";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import PasswordInput from "../PasswordInput/PasswordInput";

const RegistrationForm = () => {
  const [isRegistration, setIsRegistration] = useState(false);
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

  const onSubmitHandler = (data) => {
    const gender = "мужской";
    if (!isRegistration) {
      dispatch(accountActions.setAccountData({ ...data, gender }));
      dispatch(isLoggedAction.setLogginValue(true));
    }
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
      <PasswordInput errors={errors} register={register}></PasswordInput>
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
        <button
          type="button"
          className={styles.registration}
          onClick={onToggleHandler}
        >
          {isRegistration ? "Войти в аккаунт" : "Создать аккаунт"}
        </button>
      </p>
    </form>
  );
};

export default RegistrationForm;
