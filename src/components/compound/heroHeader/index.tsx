import React from "react";
import styles from "./index.module.scss";

const HeroHeader: React.FC = () => {
  return (
    <div id="main-top" className={styles.heroHeader}>
      <div className={styles.innerHeroHeader}>
        <div className={styles.imgBox}></div>
        <div className={styles.lineDivider}>
          <span className={styles.divider}></span>
        </div>
        <div className={styles.heroHeaderText}>
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
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
