import React from "react";
import ArrowSVG from "../../atom/arrowSvg";
import { motion } from "framer-motion";
import styles from "./index.module.scss";

const HeroHeader: React.FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      id="main-top"
      className={styles.heroHeader}
    >
      <div className={styles.innerHeroHeader}>
        <div className={styles.imgBox}></div>
        <div className={styles.lineDivider}>
          <span className={styles.divider}></span>
        </div>
        <motion.div variants={item} className={styles.heroHeaderText}>
          <div className={styles.statement}>
            <p>
              This is a portfolio of Abdul Muqeet. A Frontend Engineer Based in
              Lahore, Pakistan
            </p>
          </div>
          <button className={styles.getInTouchBtn}>
            <div>
              <h4>GET IN TOUCH </h4>
              <span className={styles.arrow}>
                <ArrowSVG />
              </span>
            </div>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const container = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default HeroHeader;
