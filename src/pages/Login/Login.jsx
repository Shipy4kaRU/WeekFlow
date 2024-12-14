import styles from "./styles.module.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import bird from "../../assets/bird.svg";
import { useEffect } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const Login = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const transformBird = {
    transform: `translate(${mousePosition.x * 0.03}px, ${
      mousePosition.y * 0.05
    }px) rotate(${mousePosition.x * 0.0008 - mousePosition.y * 0.0005}rad)`,
  };

  return (
    <section className={styles.login}>
      <div className={styles["image"]}>
        <img src={logo} alt="Логотип WeekFlow" className={styles.logo} />
        <img
          src={bird}
          alt="Птичка"
          className={styles.bird}
          style={transformBird}
        />
        <img
          src={bird}
          alt="Птичка"
          className={`${styles.bird} ${styles["bird--2"]}`}
          style={transformBird}
        />
        <p className={styles["image-text"]}>
          WeekFlow: упорядочи свою неделю, достигай своих целей!
        </p>
      </div>
      <RegistrationForm></RegistrationForm>
    </section>
  );
};

export default Login;
