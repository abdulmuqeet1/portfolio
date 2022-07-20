import type { NextPage } from "next";
// components
import HeroHeader from "../components/compound/heroHeader";
// Styles
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <HeroHeader />
        <h1>Portfolio</h1>
      </main>
    </div>
  );
};

export default Home;
