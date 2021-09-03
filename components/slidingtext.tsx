import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  initial: {
    x: -100,
    y: -120,
  },
  animate: {
    rotate: ["30deg", "-30deg"],
    transfornX: -100,
    transfornY: -100,
    transition: {
      yoyo: Infinity,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Slidingtext = () => {
  return (
    <div className={styles.contactsection}>
      <div className={styles.slidingtext1}>
        <span></span>
      </div>
      <motion.div
        className={styles.icon}
        variants={iconVariants}
        initial="initial"
        whileHover="animate"
      >
        <Link href="/contact">
          <FaPhoneAlt />
        </Link>
      </motion.div>

      <div className={styles.slidingtext2}>
        <span></span>
      </div>
    </div>
  );
};

export default Slidingtext;
