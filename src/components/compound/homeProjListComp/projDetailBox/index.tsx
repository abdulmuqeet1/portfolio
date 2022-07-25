import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import ArrowSVG from "../../../atom/arrowSvg";
import Link from "next/link";
import { ProjectListBoxProps } from "../../../../types/components";

const ProjDetailBox: React.FC<ProjectListBoxProps> = ({
  data,
}: ProjectListBoxProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.titleBox}>
        <h2>{data.title}</h2>
        <p>{data.detail}</p>
        <div className={styles.visitProj}>
          <button className={styles.visitSiteBtn}>
            Visit Site
            <span className={styles.arrow}>
              <ArrowSVG />
            </span>
          </button>
          <button className={styles.githubBtn}>
            <Link href={data.repoUrl?.toString() || "#"}>Github</Link>
          </button>
        </div>
      </div>
      <div className={styles.imageBox}>
        <Link href={data.pageUrl}>
          <Image src={data.pictureUrl} alt={data.title} layout="fill" />
        </Link>
      </div>
      <div className={styles.tagBox}>
        <h4>Dev and Design</h4>
        <p>{data.yearBuilt || "2021"}</p>
      </div>
    </div>
  );
};

export default ProjDetailBox;
