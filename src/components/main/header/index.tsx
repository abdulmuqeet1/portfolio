import React from "react";
import styles from "./index.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.menu}>
          <button className={styles.menuBtn}>menu</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
