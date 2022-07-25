import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
// icons
// import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h5>FOLLOW ME</h5>
      <ul className={styles.socialList}>
        <li></li>
        {/* <li>
          <BsTwitter />
        </li> */}
        <li>
          <Link
            href={"https://linkedin.com/in/abdul-muqeet-a8a502169"}
            passHref
          >
            <a target="_blank">
              <FaLinkedinIn />
            </a>
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/abdulmuqeet1"} passHref>
            <a target="_blank">
              <AiFillGithub />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/abdul.muqeet.900" passHref>
            <a target="_blank">
              <FaFacebookF />
            </a>
          </Link>
        </li>
        {/* <li>
          <BsInstagram />
        </li> */}
        <li></li>
      </ul>
      <p>
        <span>&copy; 2022 Abdul Muqeet Resume</span>
      </p>
    </footer>
  );
};

export default Footer;
