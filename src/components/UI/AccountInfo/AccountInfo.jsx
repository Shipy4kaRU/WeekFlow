import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountInfo = ({ label, info }) => {
  const isLoading = useSelector((state) => state.loading.profile);
  const history = useHistory();

  const onRedirectHandler = () => {
    history.push("/settings");
  };

  return (
    <div className={`${styles.account} ${isLoading && styles.loading}`}>
      <p className={styles.profile}>{`${label}:`}</p>
      <button
        className={styles.info}
        onClick={onRedirectHandler}
        disabled={isLoading}
      >
        {info}
      </button>
    </div>
  );
};

export default AccountInfo;
