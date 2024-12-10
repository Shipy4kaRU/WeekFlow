import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const ParallaxBolls = () => {
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

  const transformBall = {
    transform: `translate(${mousePosition.x * 0.1}px, ${
      mousePosition.y * 0.1
    }px)`,
  };

  const transformBall2 = {
    transform: `translate(${mousePosition.x * 0.07}px, ${
      mousePosition.y * 0.1
    }px)`,
  };

  const transformBall3 = {
    transform: `translate(${mousePosition.x * 0.13}px, ${
      mousePosition.y * 0.1
    }px)`,
  };

  const transformBall4 = {
    transform: `translate(${mousePosition.x * 0.15}px, ${
      mousePosition.y * 0.1
    }px)`,
  };

  return (
    <>
      <div
        className={`${styles.ball} ${styles["ball--1"]}`}
        style={transformBall}
      ></div>
      <div
        className={`${styles.ball} ${styles["ball--2"]}`}
        style={transformBall2}
      ></div>
      <div
        className={`${styles.ball} ${styles["ball--3"]}`}
        style={transformBall2}
      ></div>
      <div
        className={`${styles.ball} ${styles["ball--4"]}`}
        style={transformBall3}
      ></div>
      <div
        className={`${styles.ball} ${styles["ball--5"]}`}
        style={transformBall4}
      ></div>
      <div
        className={`${styles.ball} ${styles["ball--6"]}`}
        style={transformBall}
      ></div>
      <div
        className={`${styles.ball} ${styles["ball--7"]}`}
        style={transformBall2}
      ></div>
    </>
  );
};

export default ParallaxBolls;
