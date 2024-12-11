import Theme from "../../components/Theme/Theme";
import ChangeInfo from "../../components/UI/ChangeInfo/ChangeInfo";
import ChangeGender from "../../components/ChangeGender/ChangeGender";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { accountActions } from "../../store/accountSlice";

const Settings = () => {
  const dispatch = useDispatch();

  const onSubmitUsernameHandler = (value) => {
    dispatch(accountActions.setUsername(value));
  };

  const onSubmitPasswordHandler = (value) => {
    dispatch(accountActions.setPassword(value));
  };

  return (
    <>
      <h1 className="visually-hidden">Настройки</h1>
      <Theme />
      <ChangeInfo
        text="Установить новое имя пользователя:"
        onSubmit={onSubmitUsernameHandler}
      />
      <ChangeInfo
        text="Установить новый пароль:"
        onSubmit={onSubmitPasswordHandler}
      />
      <ChangeGender />
    </>
  );
};

export default Settings;
