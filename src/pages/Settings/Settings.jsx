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
