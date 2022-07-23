import type { NextPage } from "next";
import ProjectListComp from "../../components/compound/projectListComp";
import styles from "../../styles/projects.module.scss";

const Projects: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <ProjectListComp />
      </main>
    </div>
  );
};

export default Projects;
