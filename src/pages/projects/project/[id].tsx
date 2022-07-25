import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineGithub } from "react-icons/ai";
import styles from "../../../styles/projects.module.scss";
import CustomLoader from "../../../components/atom/loader";
import { projectList } from "../../../dataSource/";

const ProjectDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const projData = projectList.filter((item) => item.projectID == id)[0];
  if (projData) {
    return (
      <div className={styles.root}>
        <div className={styles.imgBox}>
          <Image src={projData.pictureUrl} alt={projData.title} layout="fill" />
        </div>
        <div className={styles.detailBox}>
          <h2>{projData.title}</h2>
          <p>{projData.detail}</p>
          <br />
          <br />
          <h4 className={styles.launchProj}>
            <Link href="#">Launch Project</Link>
          </h4>
          <br />
          <h4>Tags</h4>
          <p>{projData.tag}</p>
          <h4>Date</h4>
          <p>2021</p>
          <br />
          <li>
            <Link href={projData.repoUrl || "#"}>
              <AiOutlineGithub />
            </Link>
          </li>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.loaderBox}>
        <CustomLoader />
      </div>
    );
  }
};

export default ProjectDetail;
