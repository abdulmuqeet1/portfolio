import React from "react";
// * mui
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// * styles
import styles from "./index.module.scss";

const ProjectTab: React.FC = () => {
  const [value, setValue] = React.useState("1");

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
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Frontend" value="1" />
            <Tab label="React" value="2" />
            <Tab label="ThreeJS" value="3" />
            <Tab label="NodeJS" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </div>
  );
};

export default ProjectTab;
