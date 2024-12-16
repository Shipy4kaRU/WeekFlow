import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { accountActions } from "../../store/accountSlice";

const ChangeGender = () => {
  const gender = useSelector((state) => state.account.gender);
  const isLoading = useSelector((state) => state.loading.settings);
  const userUid = useSelector((state) => state.account.uid);
  const dispatch = useDispatch();

  const onSetGenderHandler = async (settingGender) => {
    if (gender !== settingGender) {
      dispatch(accountActions.setGender(settingGender));
      const response = await fetch(
        `https://weekflow-8020a-default-rtdb.firebaseio.com/users/${userUid}/account/gender.json`,
        {
          method: "PUT",
          body: JSON.stringify(settingGender),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка при отправке данных корзины");
      }
    }
  };

  return (
    <div className={`${styles.form} ${isLoading && styles.loading}`}>
      <p className={styles.text}>Сменить пол:</p>
      <button
        className={`${styles.btn} ${gender === "мужской" ? styles.active : ""}`}
        onClick={() => {
          onSetGenderHandler("мужской");
        }}
        disabled={isLoading}
      >
        {!isLoading && "Муж"}
      </button>
      <p>/</p>
      <button
        className={`${styles.btn} ${gender === "женский" ? styles.active : ""}`}
        onClick={() => {
          onSetGenderHandler("женский");
        }}
        disabled={isLoading}
      >
        {!isLoading && "Жен"}
      </button>
    </div>
  );
};

export default ChangeGender;
