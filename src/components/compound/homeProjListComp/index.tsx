import React from "react";
import ProjDetailBox from "./projDetailBox";
import styles from "./styles/index.module.scss";

import { homeProjListData } from "../../../dataSource";

const HomeProjList: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        {homeProjListData.map((proj: any) => {
          return <ProjDetailBox data={proj} key={proj.projectID} />;
        })}
      </div>
    </div>
  );
};

export default HomeProjList;
