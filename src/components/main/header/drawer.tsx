import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles/drawer.module.scss";

interface DrawerComp {
  drawerState: boolean;
  drawerToggle: () => void;
}

const Drawer: React.FC<DrawerComp> = ({
  drawerState,
  drawerToggle,
}: DrawerComp) => {
  const [open, setOpen] = React.useState<boolean>(drawerState || false);
  return (
    <div className={open ? styles.headerDrawerOpen : styles.headerDrawerClosed}>
      <button className={styles.drawerCloseBtn} onClick={drawerToggle}>
        <AiOutlineClose />
      </button>
      <div className={styles.drawerInner}>
        <ul className={styles.linkList}>
          <li>
            <Link href="/">
              <h4 onClick={drawerToggle}>Home</h4>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <h4 onClick={drawerToggle}>Projects</h4>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h4 onClick={drawerToggle}>About</h4>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h4 onClick={drawerToggle}>Contact</h4>
            </Link>
          </li>
        </ul>

        <div className={styles.downloadResume}>
          <a href="" onClick={drawerToggle}>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
