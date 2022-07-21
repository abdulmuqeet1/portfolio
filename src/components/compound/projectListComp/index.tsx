import React from "react";
import ProjectTabPanel from "./tabPanel";
// * mui
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// * styles
import styles from "./styles/index.module.scss";

import projectList from "../../../dataSource";

const ProjectListComp: React.FC = () => {
  const [value, setValue] = React.useState<string>("all");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div id="mainTop" className={styles.projectTab}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className={styles.mainProjHeading}>
            <h1>PROJECTS</h1>
            <span className={styles.divider}></span>
          </div>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            color="primary"
          >
            <Tab label="All" value="all" color="primary" />
            <Tab label="Frontend" value="frontend" color="primary" />
            <Tab label="ThreeJS" value="threejs" color="primary" />
            <Tab label="NodeJS" value="nodejs" color="primary" />
          </TabList>
        </Box>
        <ProjectTabPanel tabValue={value} projDataList={projectList} />
      </TabContext>
    </div>
  );
};

export default ProjectListComp;
