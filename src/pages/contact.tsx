import type { NextPage } from "next";
// Components
import { ImLocation2 } from "react-icons/im";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
// import {AiOutlineMail} from "react-icons/ai"
// Styles
import styles from "../styles/misc.module.scss";

const ContactUs: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.about}>
        <div className={styles.titleBox}>
          <h5>TL;DR</h5>
          <h2>
            I&#39;m Muqeet, a Software Engineer from Lahore, Pakistan{" "}
            <span>✌︎</span>
          </h2>
        </div>
        <div className={styles.divider} />
        <div className={styles.detailBox}>
          I spend most of my time maintaining a solid caffeine buzz and looking
          for dogs shaped like potatoes or gazelles. Spotting a corgi or
          greyhound is 100 points. Dogs are perfect in every way, however, I am
          very against hotdogs. I like to say “in order to be a dog, you must
          have the ability to bark.”
          <br />
          {/* <br /> Further, I feel that improperly named foods are a missed */}
          {/* opportunity. ‘Eggplant’ is one of the worst offenders (at second */}
          {/* place).  */}
          {/* Some other things that distress me include: speaking before */}
          {/* thinking, animals wearing nail polish, putting ‘outside clothes’ on */}
          {/* the bed, the beach, socks with toe pockets (sloves? gocks?), people */}
          {/* who don’t let you get off the train before stepping in, and pizza that */}
          {/* has no structural integrity. */}
          <br />
          Things that don’t vex me? Podcasts, writing for pleasure, reading for
          self-improvement, the critically acclaimed film “The Room,” and many
          others. I’m an over thinker– not a pessimist– and a designer from
          Queens, living and working in Lahore.
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactTextBox}>
          <div className={styles.contactHeading}>
            <h2>Get In Touch</h2>
            <span className={styles.line}></span>
          </div>
          <div className="contactDetail">
            <address>
              <ImLocation2 />
              Lahore, Pakistan
            </address>
            <p>
              <AiTwotonePhone /> +92 304 9785798
            </p>
            <a href="mailto:abdulmuqeet521@gmail.com">
              <AiOutlineMail /> abdulmuqeet521@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.form}></div>
      </div>
    </div>
  );
};

export default ContactUs;
