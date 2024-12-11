import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";

const AccountInfo = ({ label, info }) => {
  const history = useHistory();

  const onRedirectHandler = () => {
    history.push("/settings");
  };

  return (
    <div className={styles.account}>
      <p className={styles.profile}>{`${label}:`}</p>
      <button className={styles.info} onClick={onRedirectHandler}>
        {info}
      </button>
    </div>
  );
};

export default AccountInfo;
