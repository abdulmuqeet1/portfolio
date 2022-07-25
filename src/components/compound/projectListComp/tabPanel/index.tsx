import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// * mui
import TabPanel from "@mui/lab/TabPanel";
// * styles
import styles from "./index.module.scss";
import {
  ProjectTabPanelProps,
  projectDataProps,
} from "../../../../types/components";

const ProjectTabPanel: React.FC<projectDataProps> = ({
  tabValue,
  projDataList,
}: projectDataProps) => {
  if (tabValue.toLocaleLowerCase() === "all") {
    return (
      <TabPanel value={tabValue} className={styles.tabPanel}>
        {projDataList.map((proj: ProjectTabPanelProps, idx: number) => {
          return (
            <div className={styles.projBox} key={idx}>
              <Link href={proj.pageUrl}>
                <motion.div variants={container}>
                  <Image
                    src={`${proj.pictureUrl}`}
                    alt={proj.title}
                    layout="fill"
                  />
                </motion.div>
              </Link>
              <Link href={proj.pageUrl}>
                <div className={styles.projDetailBox}>
                  <h2>{proj.title}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </TabPanel>
    );
  } else {
    return (
      <TabPanel value={tabValue} className={styles.tabPanel}>
        {projDataList.map((proj: any, idx: number) => {
          return (
            proj.tag == tabValue && (
              <div className={styles.projBox} key={idx}>
                <Link href={proj.pageUrl}>
                  <div>
                    <Image
                      src={proj.pictureUrl}
                      alt={proj.title}
                      layout="fill"
                    />
                  </div>
                </Link>
                <Link href={proj.pageUrl}>
                  <div className={styles.projDetailBox}>
                    <h2>{proj.title}</h2>
                  </div>
                </Link>
              </div>
            )
          );
        })}
      </TabPanel>
    );
  }
};

const container = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default ProjectTabPanel;
