import styles from "./styles.module.css";
import ProfilePicture from "../../components/UI/ProfilePicture/ProfilePicture";
import AccountInfo from "../../components/UI/AccountInfo/AccountInfo";
import AboutMe from "../../components/AboutMe/AboutMe";

const Profile = () => {
  return (
    <>
      <div className={styles.profile}>
        <ProfilePicture></ProfilePicture>
        <div className={styles["account-container"]}>
          <AccountInfo label="Логин" info="LoliHunter" />
          <AccountInfo label="Пароль" info="admin123" />
          <AccountInfo label="Пол" info="мужской" />
        </div>
      </div>
      <AboutMe />
    </>
  );
};

export default Profile;
