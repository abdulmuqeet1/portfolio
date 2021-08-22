import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../../styles/project/Projectlist.module.scss";
import { motion } from "framer-motion";
import { ProjectsListData } from "./projectlistdata";

const imageVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    trnasition: { duration: 0.6 },
  },
};

const ProjectsList = () => {
  return (
    <div className={style.projectslist}>
      <h2>PEOJECTS</h2>
      <ul>
        {/* {ProjectsListData.map((proj, key) => {
          return (
            <li key={key}>
              <h2>{proj.id}</h2>
              <motion.div
                className={style.projimg}
                initial={{ y: 40, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                <motion.img src={proj.imgurl} alt="logo" />
              </motion.div>
              <div className="projdetail">
                <h4>{proj.name}</h4>
                <p>{proj.detail}</p>
              </div>
            </li>
          );
        })} */}
        {ProjectsListData.map((proj, key) => {
          return (
            <li key={key}>
              <h2>{proj.id}</h2>
              <div className={style.projimg}>
                <a href={proj.url}>
                  <img src={proj.imgurl} alt="logo" />
                </a>

                <div className={style.imgcurtain}></div>
              </div>
              <div className={style.projdetail}>
                <h4>{proj.name}</h4>
                <br />
                <p>{proj.detail}</p>
                <div className={style.projtagslist}>
                  {proj.tags.map((tag, key) => {
                    return <p key={key}>{tag}</p>;
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsList;
