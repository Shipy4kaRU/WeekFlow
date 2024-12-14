import { useState } from "react";
import { useDispatch } from "react-redux";
import { isLoggedAction } from "../../store/isLoggedSlice";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import PasswordInput from "../PasswordInput/PasswordInput";
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import googleSvg from "../../assets/google.svg";

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

  const onSubmitHandler = async (data) => {
    try {
      if (!isRegistration) {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        dispatch(isLoggedAction.setLogginValue(true));
      } else {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        dispatch(isLoggedAction.setLogginValue(true));
      }
    } catch (error) {
      console.error("Ошибка:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(isLoggedAction.setLogginValue(true));

      console.log("Успешный вход через Google:", result.user);
    } catch (error) {
      console.error("Ошибка входа через Google:", error.message);
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
      <button onClick={handleGoogleSignIn} className={styles["google-button"]}>
        <img src={googleSvg} alt="Google Icon" className={styles.google} />
        Войти через <span className={styles.bold}>Google</span>
      </button>
      <div className={styles.container}>
        <label htmlFor="username" className={styles["form-label"]}>
          Email
        </label>
        <input
          type="text"
          id="username"
          placeholder="example@email.com"
          className={`${styles.username} ${styles.input} ${
            errors.username && styles["error-input"]
          }`}
          {...register("email")}
        />
        {errors.email && (
          <p className={styles.error}>{`${errors.email.message}*`}</p>
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
