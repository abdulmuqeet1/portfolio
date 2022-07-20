import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import Logo from "../../../../public/assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image src={Logo} alt="Logo" width={160} height={66} />
          </div>
        </Link>
        <div className={styles.menu}>
          <button className={styles.menuBtn}>menu</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
