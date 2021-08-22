import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import styled from "styled-components";
// import ProjectsList from "../components/project/ProjectsList";
import ProjectsList from "../components/project/projectsList";
import Slidingtext from "../components/slidingtext";

const Dash = styled.p`
  display: block;
  width: 1rem;
  height: 5px;
  color: transparent;
  font-size: 15px;
  font-weight: 900;
  border: none;
  background-color: black;
  margin: 7px 1rem;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.homeinner}>
        <div className={styles.maincontent}>
          <div className={styles.textdiv}>
            <h2>Abdul Muqeet</h2>
            <h1>SOFTWARE ENGINEER</h1>
            <p className={styles.mydetail}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              perferendis repellat quas cumque. Eveniet, odio necessitatibus
              laboriosam aliquid, voluptates deleniti rerum voluptatibus dolorum
              deserunt sint!
            </p>
            <br />
            <br />
            <div className={styles.maincontentlinks}>
              <Link href="#">
                <p>PROJECTS</p>
              </Link>
              <span></span>
              <Link href="/about">
                <p>ABOUT</p>
              </Link>
            </div>
          </div>

          <div className={styles.model3d}></div>
        </div>
        <ProjectsList />

        <div className={styles.services}>
          <h2>SERVICES</h2>
          <div className={styles.skills}>
            <div className={styles.frontend}>
              <h3>FrontEnd</h3>
              <div className={styles.items}>
                <p>React</p>
                <p>NextJS</p>
                <p>Typescript</p>
              </div>
            </div>
            <div className={styles.backend}>
              <h3>BackEnd</h3>
              <div className={styles.items}>
                <p>NodeJS</p>
                <p>ExpressJS</p>
                <p>Django</p>
                <p>Django Rest Framework</p>
              </div>
            </div>
            <div className={styles.other}>
              <h3>Other</h3>
              <div className={styles.items}>
                <p>GraphQL</p>
                <p>Restful API</p>
                <p>PostMan</p>
                <p>Postgres</p>
                <p>MS SQL Server</p>
                <p>Machine Learning</p>
                <p>Keras Learning</p>
                <p>Numpy/Pandas Library</p>
                <p>Computer Vision</p>
                <p>Adobe XD</p>
                <p>Adobe Photoshop</p>
              </div>
            </div>
          </div>
        </div>

        <Slidingtext />
      </div>
    </div>
  );
}
