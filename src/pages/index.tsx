import type { NextPage } from "next";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
// components
import HeroHeader from "../components/compound/heroHeader";
import CustomLoader from "../components/atom/loader";
// Styles
import styles from "../styles/Home.module.scss";

const DynamicProjectList = dynamic(
  () => import("../components/compound/homeProjListComp"),
  {
    suspense: true,
  }
);

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <HeroHeader />
        <Suspense fallback={<CustomLoader />}>
          <DynamicProjectList />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
