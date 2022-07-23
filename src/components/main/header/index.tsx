import React from "react";
import Link from "next/link";
import Image from "next/image";
import Drawer from "./drawer";
import MenuSVG from "../../atom/menuSVG";
import { motion } from "framer-motion";
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
            <MenuSVG />
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
