import React from "react";
import Image from "next/image";
import ProjDetailBox from "./projDetailBox";
import styles from "./styles/index.module.scss";

import { homeProjListData } from "../../../dataSource";

const HomeProjList: React.FC = () => {
  // const projData = { ...homeProjListData[0] };
  // console.log("projData: ", projData);
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

// const HomeProjList: React.FC = () => {
//   return (
//     <div className={styles.root}>
//       <div className={styles.inner}>
//         <div className={styles.textBox}>
//           <h2>Lorem ipsum dolor sit amet</h2>
//         </div>
//         <div className={styles.imageBox}>
//           <Image
//             src="/assets/projectDesign.jpg"
//             alt="project image"
//             layout="fill"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default HomeProjList;
