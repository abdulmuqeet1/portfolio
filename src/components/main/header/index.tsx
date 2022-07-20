import React from "react";
import Link from "next/link";
import Image from "next/image";
import Drawer from "./drawer";
import styles from "./styles/index.module.scss";
import Logo from "../../../../public/assets/logo.png";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const drawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image src={Logo} alt="Logo" width={160} height={66} />
          </div>
        </Link>
        <div className={styles.menu}>
          <button className={styles.menuBtn} onClick={drawerToggle}>
            <svg
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
          </button>
        </div>
      </nav>
      {drawerOpen && (
        <Drawer drawerState={drawerOpen} drawerToggle={drawerToggle} />
      )}
    </header>
  );
};

export default Header;
