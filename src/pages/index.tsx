import type { NextPage } from "next";
// components
import HeroHeader from "../components/compound/heroHeader";
import HomeProjList from "../components/compound/homeProjListComp";
// Styles
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <HeroHeader />
        <HomeProjList />
      </main>
    </div>
  );
};

export default Home;
