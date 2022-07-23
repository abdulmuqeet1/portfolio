import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../../styles/projects.module.scss";

import { projectList } from "../../../dataSource/";

const ProjectDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const projData = projectList.filter((item) => item.projectID == id)[0];
  if (projData) {
    return (
      <div className={styles.root}>
        <div className={styles.imgBox}>
          <Image
            src={"/assets/projectDesign.jpg"}
            alt={projData.title}
            layout="fill"
          />
        </div>
        <div className={styles.detailBox}>
          <h2>{projData.title}</h2>
          <p>{projData.detail}</p>
        </div>
      </div>
    );
  } else {
    // replace below div with a loader
    return <div>project not found!</div>;
  }
};

export default ProjectDetail;
