import type { NextPage } from "next";
import TextField from "@mui/material/TextField";
import { ImLocation2 } from "react-icons/im";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
// Styles
import styles from "../styles/misc.module.scss";

const ContactUs: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.titleBox}>
            <h5>TL;DR</h5>
            <h2>
              I&#39;m Muqeet, a Software Engineer from Lahore, Pakistan{" "}
              <span>✌︎</span>
            </h2>
          </div>
          <div className={styles.divider} />
          <div className={styles.detailBox}>
            I spend most of my time maintaining a solid caffeine buzz and
            looking for dogs shaped like potatoes or gazelles. Spotting a corgi
            or greyhound is 100 points. Dogs are perfect in every way, however,
            I am very against hotdogs. I like to say “in order to be a dog, you
            must have the ability to bark.”
            <br />
            <br />
            Things that don’t vex me? Podcasts, writing for pleasure, reading
            for self-improvement, the critically acclaimed film “The Room,” and
            many others. I’m an over thinker– not a pessimist– and a designer
            from Queens, living and working in Lahore.
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactTextBox}>
          <div className={styles.contactHeading}>
            <h2>Get In Touch</h2>
            <div className={styles.lineDiv}>
              <span className={styles.lineDivider}></span>
            </div>
          </div>
          <div className={styles.contactDetail}>
            <address>
              <span className={styles.icon}>
                <ImLocation2 />
              </span>
              Lahore, Pakistan
            </address>
            <p>
              <span className={styles.icon}>
                <AiTwotonePhone />
              </span>
              +92 304 9785798
            </p>
            <a href="mailto:abdulmuqeet521@gmail.com">
              <span className={styles.icon}>
                <AiOutlineMail />
              </span>
              abdulmuqeet521@gmail.com
            </a>
          </div>
        </div>
        <form method="POST" className={styles.form}>
          <TextField id="name" label="Name" variant="standard" />
          <TextField id="email" label="Email" variant="standard" />
          <TextField id="subject" label="Subject" variant="standard" />
          <TextField id="message" label="Message" variant="standard" />
          <button>
            Submit
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
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
