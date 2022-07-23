import React from "react";
import styles from "./menuSVG.module.scss";

const MenuSVG: React.FC = () => {
  return (
    <svg
      className={styles.menuSVG}
      width="86"
      height="33"
      viewBox="0 0 86 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="bottom-line"
        className={styles.bottomLine}
        y="31"
        width="44"
        height="3"
        fill="black"
      />
      <rect
        id="middle-line"
        className={styles.middleLine}
        y="15"
        width="86"
        height="3"
        fill="black"
      />
      <rect
        id="top-line"
        className={styles.topLine}
        x="44"
        width="42"
        height="3"
        fill="black"
      />
    </svg>
  );
};

export default MenuSVG;
