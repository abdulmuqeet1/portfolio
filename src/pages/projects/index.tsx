import type { NextPage } from "next";
// components
// import ProjectTab from "../../components/compound/projectTab";
import ProjectListComp from "../../components/compound/projectListComp";

import Button from "@mui/material/Button";
import NoSsr from "@mui/material/NoSsr";

// Styles
import styles from "../../styles/projects.module.scss";

const Projects: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        {/* <NoSsr> */}
        <ProjectListComp />
        <Button variant="contained" color="secondary">
          some button
        </Button>
        {/* </NoSsr> */}
      </main>
    </div>
  );
};

export default Projects;
