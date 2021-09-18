import React from "react";
import style from "../../styles/Home.module.scss";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footerinner}>
          <div className={style.footertextsection}>
            <h2>LOGO</h2>
            <Link href="/contact" passHref>
              <button className={style.footerbtn}>Get In Touch!!</button>
            </Link>
          </div>
          <div className={style.footerinfosection}>
            <h2>CONTACT</h2>
            <br />
            {/* <p>
            <span>
              <GoLocation />
            </span>
            Lahore, Pakistan
          </p> */}
            <p>
              <span>
                <GrMail />
              </span>
              abdulmuqeet521@gmail.com
            </p>
            <p>
              <span>
                <FaPhoneAlt />
              </span>
              +92 304 9785798
            </p>
          </div>
        </div>
      </div>
      <p className={style.footerlovenote}>
        Made with{" "}
        <span>
          <AiFillHeart />
        </span>{" "}
        in Lahore, Pakistan
      </p>
    </>
  );
};

export default Footer;
