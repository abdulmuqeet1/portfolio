import React from "react";
import Image from "next/image";
import Link from "next/link";
// * mui
import TabPanel from "@mui/lab/TabPanel";
// * styles
import styles from "./index.module.scss";

interface ProjectTabPanelProps {
  projectID?: number | string;
  title: string;
  detail?: string;
  pageUrl: string;
  repoUrl?: string;
  pictureUrl: string;
  tag?: string | string[];
}

interface projectDataProps {
  tabValue: string;
  projDataList: ProjectTabPanelProps[];
}

const ProjectTabPanel: React.FC<projectDataProps> = ({
  tabValue,
  projDataList,
}: projectDataProps) => {
  if (tabValue.toLocaleLowerCase() === "all") {
    return (
      <TabPanel value={tabValue} className={styles.tabPanel}>
        {projDataList.map((proj: any, idx: number) => {
          return (
            <div className={styles.projBox} key={idx}>
              <Link href={"proj.pageUrl"}>
                <div>
                  <Image
                    src="/assets/projectDesign.jpg"
                    alt={proj.title}
                    layout="fill"
                  />
                </div>
              </Link>
              <Link href={"proj.pageUrl"}>
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
                <Link href={"proj.pageUrl"}>
                  <div>
                    <Image
                      src="/assets/projectDesign.jpg"
                      alt={proj.title}
                      layout="fill"
                    />
                  </div>
                </Link>
                <Link href={"proj.pageUrl"}>
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

export default ProjectTabPanel;
