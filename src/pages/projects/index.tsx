import type { NextPage } from "next";
// components
// import ProjectTab from "../../components/compound/projectTab";
import ProjectListComp from "../../components/compound/projectListComp";

// Styles
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
