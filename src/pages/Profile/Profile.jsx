import styles from "./styles.module.css";
import ProfilePicture from "../../components/UI/ProfilePicture/ProfilePicture";
import AccountInfo from "../../components/UI/AccountInfo/AccountInfo";
import AboutMe from "../../components/AboutMe/AboutMe";
import { useSelector } from "react-redux";

const Profile = () => {
  const gender = useSelector((state) => state.account.gender);
  const username = useSelector((state) => state.account.username);
  const password = useSelector((state) => state.account.password);

  return (
    <>
      <h1 className="visually-hidden">Профиль</h1>
      <div className={styles.profile}>
        <ProfilePicture></ProfilePicture>
        <div className={styles["account-container"]}>
          <AccountInfo label="Имя пользователя" info={username} />
          <AccountInfo label="Пароль" info={password} />
          <AccountInfo label="Пол" info={gender} />
        </div>
      </div>
      <AboutMe />
    </>
  );
};

export default Profile;
