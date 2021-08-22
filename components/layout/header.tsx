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
        <title>Hello World</title>
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
              <Link href="/">
                <li> HOME </li>
              </Link>
              <Link href="/about">
                <li> ABOUT </li>
              </Link>

              <Link href="/contact">
                <li>CONTACT </li>
              </Link>
            </ul>
            <div className={style.social}>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithubSquare />
              </a>
              <a href="mailto:abdulmuqeet@gmail.com">
                <GrMail />
              </a>
              <a href="#">
                <FaFacebookSquare />
              </a>
              <br />
              <button className={style.downloadbtn}>Download Resume</button>
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
