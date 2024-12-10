import styles from "./styles.module.css";

const AccountInfo = ({ label, info }) => {
  return (
    <div className={styles.account}>
      <p className={styles.profile}>{`${label}:`}</p>
      <p className={styles.info}>{info}</p>
    </div>
  );
};

export default AccountInfo;
