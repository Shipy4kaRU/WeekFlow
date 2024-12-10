import styles from "./styles.module.css";
import { PROFILE_ICONS } from "../../../constants/PROFILE_ICONS";

const ProfilePicture = () => {
  return (
    <div className={styles.profile}>
      <img src={PROFILE_ICONS.man2} alt="Фото профиля" className={styles.img} />
    </div>
  );
};

export default ProfilePicture;
