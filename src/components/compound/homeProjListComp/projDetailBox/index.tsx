import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

interface ProjectDataProps {
  projectID: number | string;
  title: string;
  detail?: string;
  pageUrl: string;
  repoUrl?: string;
  pictureUrl: string;
  category: string;
  yearBuilt: number;
}

interface ProjectListBoxProps {
  data: ProjectDataProps;
}

const ProjDetailBox: React.FC<ProjectListBoxProps> = ({
  data,
}: ProjectListBoxProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.titleBox}>
        <h2>{data.title || "Project title here"}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className={styles.visitProj}>
          <button className={styles.visitSiteBtn}>
            Visit Site
            <span className={styles.arrow}>
              <svg
                width="512"
                height="329"
                viewBox="0 0 512 329"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow-vector" filter="url(#filter0_d_1_3)">
                  <path
                    d="M502.6 183.6L374.6 311.6C362.09 324.11 341.84 324.09 329.35 311.6C316.85 299.1 316.85 278.85 329.35 266.35L402.8 193H32C14.31 193 0 178.7 0 160.1C0 141.5 14.31 129 32 129H402.8L329.42 55.62C316.92 43.12 316.92 22.87 329.42 10.37C341.92 -2.13 362.17 -2.13 374.67 10.37L502.67 138.37C515.1 150.9 515.1 171.1 502.6 183.6Z"
                    fill="url(#paint0_linear_1_3)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_3"
                    x="-4"
                    y="0.994995"
                    width="519.984"
                    height="327.98"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_3"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_3"
                    x1="487.5"
                    y1="140.5"
                    x2="1.22053e-05"
                    y2="161"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3BC399" />
                    <stop offset="0.999364" stopColor="#C662C3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </button>
          <button className={styles.githubBtn}>
            <Link href={data.pageUrl}>Github</Link>
          </button>
        </div>
      </div>
      <div className={styles.imageBox}>
        <Link href={data.pageUrl}>
          <Image
            src={"/assets/projectDesign.jpg"}
            alt="proj image"
            layout="fill"
          />
        </Link>
      </div>
      <div className={styles.tagBox}>
        <h4>Dev and Design</h4>
        <p>2021</p>
      </div>
    </div>
  );
};

export default ProjDetailBox;