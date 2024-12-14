import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { accountActions } from "../../store/accountSlice";

const ChangeGender = () => {
  const gender = useSelector((state) => state.account.gender);
  const isLoading = useSelector((state) => state.loading.settings);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.form} ${isLoading && styles.loading}`}>
      <p className={styles.text}>Сменить пол:</p>
      <button
        className={`${styles.btn} ${gender === "мужской" ? styles.active : ""}`}
        onClick={() => {
          if (gender !== "мужской")
            dispatch(accountActions.setGender("мужской"));
        }}
        disabled={isLoading}
      >
        {!isLoading && "Муж"}
      </button>
      <p>/</p>
      <button
        className={`${styles.btn} ${gender === "женский" ? styles.active : ""}`}
        onClick={() => {
          if (gender !== "женский")
            dispatch(accountActions.setGender("женский"));
        }}
        disabled={isLoading}
      >
        {!isLoading && "Жен"}
      </button>
    </div>
  );
};

export default ChangeGender;
