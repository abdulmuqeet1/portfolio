import type { NextPage } from "next";
// components
import ProjectTab from "../components/compound/projectTab";
// Styles
import styles from "../styles/projects.module.scss";

const Projects: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <ProjectTab />
      </main>
    </div>
  );
};

export default Projects;
