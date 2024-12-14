import styles from "./styles.module.css";
import { PROFILE_ICONS } from "../../../constants/PROFILE_ICONS";
import { useSelector } from "react-redux";

const ProfilePicture = () => {
  const gender = useSelector((state) => state.account.gender);
  const isLoading = useSelector((state) => state.loading.profile);

  return (
    <div className={`${styles.profile} ${isLoading && styles.loading}`}>
      <img
        src={
          PROFILE_ICONS[
            gender === "мужской"
              ? `man${Math.ceil(Math.random() * 6)}`
              : `woman${Math.ceil(Math.random() * 6)}`
          ]
        }
        alt="Фото профиля"
        className={styles.img}
      />
    </div>
  );
};

export default ProfilePicture;
