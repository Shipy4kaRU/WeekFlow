import styles from "./styles.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import svg from "../../assets/svgSprite.svg";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <li className={styles["link-element"]}>
          <NavLink
            activeClassName={styles.active}
            to="/calendar"
            className={styles.link}
          >
            <div className={styles["icon-container"]}>
              <div className={styles.animation}>
                <svg className={styles.icon}>
                  <use href={`${svg}#calendar`} />
                </svg>
              </div>
              <span className={styles.text}>Календарь</span>
            </div>
          </NavLink>
        </li>
        <li className={styles["link-element"]}>
          <NavLink
            activeClassName={styles.active}
            to="/profile"
            className={styles.link}
          >
            <div className={styles["icon-container"]}>
              <div className={styles.animation}>
                <svg className={styles.icon}>
                  <use href={`${svg}#profile`} />
                </svg>
              </div>
              <span className={styles.text}>Профиль</span>
            </div>
          </NavLink>
        </li>
        <li className={styles["link-element"]}>
          <NavLink
            activeClassName={styles.active}
            to="/settings"
            className={styles.link}
          >
            <div className={styles["icon-container"]}>
              <div className={styles.animation}>
                <svg className={styles.icon}>
                  <use href={`${svg}#settings`} />
                </svg>
              </div>
              <span className={styles.text}>Настройки</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
