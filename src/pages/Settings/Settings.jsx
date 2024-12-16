import Theme from "../../components/Theme/Theme";
import ChangeInfo from "../../components/UI/ChangeInfo/ChangeInfo";
import ChangeGender from "../../components/ChangeGender/ChangeGender";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../../store/accountSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.account.username);
  const password = useSelector((state) => state.account.password);
  const userUid = useSelector((state) => state.account.uid);

  const onSubmitUsernameHandler = async (value) => {
    dispatch(accountActions.setUsername(value));
    const response = await fetch(
      `https://weekflow-8020a-default-rtdb.firebaseio.com/users/${userUid}/account/username.json`,
      {
        method: "PUT",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Ошибка при отправке данных");
    }
  };

  const onSubmitPasswordHandler = async (value) => {
    dispatch(accountActions.setPassword(value));
    const response = await fetch(
      `https://weekflow-8020a-default-rtdb.firebaseio.com/users/${userUid}/account/password.json`,
      {
        method: "PUT",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Ошибка при отправке данных");
    }
  };

  return (
    <>
      <h1 className="visually-hidden">Настройки</h1>
      <Theme />
      <ChangeInfo
        text="Установить новое имя пользователя:"
        startValue={username}
        onSubmit={onSubmitUsernameHandler}
      />
      <ChangeInfo
        text="Установить новый пароль:"
        startValue={password}
        onSubmit={onSubmitPasswordHandler}
      />
      <ChangeGender />
    </>
  );
};

export default Settings;
