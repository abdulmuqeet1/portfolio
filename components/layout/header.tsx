import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import style from "../../styles/Home.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { GrClose, GrMail } from "react-icons/gr";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";
import styled from "styled-components";

// const Downloadbtn = styled.button`
//   width:
//   color: ${props => props.inputColor || "palevioletred"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

const navVariant = {
  hidden: {},
};

const Header = () => {
  const [opennav, setOpennav] = useState<boolean>(false);

  const togglenav = () => {
    setOpennav(!opennav);
  };
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className={style.header}>
        <nav>
          <div className="logo">
            <Link href="/">LOGO</Link>
          </div>
          <div className="navbarbtn">
            <motion.button className={style.navbtn} onClick={togglenav} drag>
              {opennav ? (
                <span className={style.navclosebtn}>
                  <GrClose />
                </span>
              ) : (
                <GiHamburgerMenu />
              )}
            </motion.button>
          </div>
        </nav>
        <div className={opennav ? style.opennav : style.closednav}>
          <div className="innernav">
            <ul className={style.links}>
              <Link href="/" passHref>
                <li> HOME </li>
              </Link>
              <Link href="/about" passHref>
                <li> ABOUT </li>
              </Link>

              <Link href="/contact" passHref>
                <li>CONTACT </li>
              </Link>
            </ul>
            <div className={style.social}>
              <a
                href="https://www.linkedin.com/in/abdul-muqeet-a8a502169/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/abdulmuqeet1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
              <a href="mailto:abdulmuqeet@gmail.com">
                <GrMail />
              </a>
              <a
                href="https://www.facebook.com/abdul.muqeet.900/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFacebookSquare />
              </a>
              <br />
              {/* href="/resume.pdf"
                download
                className={style.downloadresumebtn} */}
              {/* <button className={style.downloadbtn}>Download Resume</button> */}
              <button className={style.downloadbtn}>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </button>
            </div>
            <div className={style.info}>
              <p>
                <span>
                  <GoLocation />
                </span>
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
