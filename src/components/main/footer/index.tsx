import React from "react";
import styles from "./index.module.scss";
// icons
import { BsTwitter, BsBehance, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h5>FOLLOW ME</h5>
      <ul className={styles.socialList}>
        <li></li>
        <li>
          <BsTwitter />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <BsBehance />
        </li>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li></li>
      </ul>
      <p>
        <span>&copy; 2022 Abdul Muqeet Resume</span>
      </p>
    </footer>
  );
};

export default Footer;
