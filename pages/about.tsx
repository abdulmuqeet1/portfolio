import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/restpages/Main.module.scss";
import ProjectsList from "../components/project/projectsList";
import Slidingtext from "../components/slidingtext";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const clientimgVariants = {};

const About = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.aboutinnercontainer}>
        <div className={styles.aboutmaincontent}>
          <h4>A few words about me</h4>
          <h1>
            I’m Abdul Muqeet, a multidisciplinary software engineer who focuses
            on telling my clients’ stories visually, through enjoyable and
            meaningful experiences. I specialize in responsive websites and
            functional user interfaces.
          </h1>
          <p>
            Over the past 2 years I have been working with different companies
            and rising startups around the world as a software developer and UI
            designer, working solo and leading small teams. In my spare time I
            enjoy playing chess and motorcycle adventures.
          </p>
        </div>
        <div className={styles.aboutservices}>
          <div className="services">
            <h2>Services</h2>
            <div>
              <p>Frontend Development</p>
              <p>API Development</p>
              <p>Web Animation</p>
              <p>UI</p>
            </div>
          </div>
          <div className="tools">
            <h2>Tools</h2>
            <div>
              <p>ReactJS</p>
              <p>Postman</p>
              <p>Adobe XD</p>
              <p>VS Code</p>
              <p>Framer Motion</p>
            </div>
          </div>
        </div>

        <div className={styles.aboutexperience}>
          <h4>experience</h4>
          <h1>Over 2 years of experience</h1>
          <p>
            I’ve been lucky enough to establish relationships with amazing
            clients from all over the world, ranging from individual clients,
            through up-and-coming startups, to multinational companies. For more
            details, head over to my <Link href="#">LinkedIn profile</Link>.
          </p>
        </div>
        <div className={styles.aboutprojects}>
          <ProjectsList />
        </div>
        <div className={styles.aboutclients}>
          <h4>CLIENTS</h4>
          <h1>Some of the brands I’ve worked with</h1>
          <p>
            Over the past 2 years I’ve had the pleasure to work with customers
            from various sectors on many interesting projects.
          </p>

          <div className={styles.clientimg}>
            <motion.div
              className="img"
              initial={false}
              whileHover={{ y: -50, scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/logo/avicta.png"
                width={200}
                height={120}
                alt="logo"
              />
            </motion.div>
            <motion.div
              className="img"
              initial={false}
              whileHover={{ y: -50, scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/avicta.png"
                width={200}
                height={120}
                alt="logo"
              />
            </motion.div>
            <motion.div
              className="img"
              initial={false}
              whileHover={{ y: -50, scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/avicta.png"
                width={200}
                height={120}
                alt="logo"
              />
            </motion.div>
            <motion.div
              className="img"
              initial={false}
              whileHover={{ y: -50, scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/avicta.png"
                width={200}
                height={120}
                alt="logo"
              />
            </motion.div>
          </div>
        </div>

        <div className={styles.aboutcontactsec}>
          <h4>Need my Services?</h4>
          <Link href="/contact" passHref>
            <h1>
              Let&apos;s Work Together
              <span className={styles.arrowicon}>
                <HiArrowNarrowRight />
              </span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
