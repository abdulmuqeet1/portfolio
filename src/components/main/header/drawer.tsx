import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exitComp"
        className={styles.headerDrawerOpen}
      >
        <button className={styles.drawerCloseBtn} onClick={drawerToggle}>
          <AiOutlineClose />
        </button>
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className={styles.drawerInner}
        >
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
            <a href="/files/Resume.pdf" download onClick={drawerToggle}>
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delayChildren: 0.4,
    },
  },
  exitComp: {
    opacity: 0,
    duration: 0.5,
    transition: {
      duration: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default Drawer;
