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
        <div className={styles.projImgBox}>
          {projDataList.map((proj: any, idx: number) => {
            return (
              <Link href={"proj.pageUrl"} key={idx}>
                <div>
                  <p>{proj.title}</p>
                  <p>{proj.detail}</p>
                  <p>{proj.pageUrl}</p>
                  <p>{proj.pictureUrl}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </TabPanel>
    );
  } else {
    return (
      <TabPanel value={tabValue} className={styles.tabPanel}>
        <div className={styles.projImgBox}>
          {projDataList.map((proj: any, idx: number) => {
            return (
              proj.tag == tabValue && (
                <Link href={"proj.pageUrl"} key={idx}>
                  <div>
                    <p>{proj.title}</p>
                    <p>{proj.detail}</p>
                    <p>{proj.pageUrl}</p>
                    <p>{proj.pictureUrl}</p>
                  </div>
                </Link>
              )
            );
          })}
        </div>
      </TabPanel>
    );
  }
};

export default ProjectTabPanel;
