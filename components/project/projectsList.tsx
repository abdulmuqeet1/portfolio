import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import style from "../../styles/project/Projectlist.module.scss";
import { motion } from "framer-motion";
import { ProjectsListData } from "./projectlistdata";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiFramer, SiNextDotJs } from "react-icons/si";

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
        {ProjectsListData.map((proj, key) => {
          return (
            <li key={key}>
              <h2>{proj.id}</h2>
              <div className={style.projimg}>
                <Link href={proj.url}>
                  <Image
                    src={proj.imgurl}
                    alt="logo"
                    width={200}
                    height={120}
                  />
                </Link>

                <div className={style.imgcurtain}></div>
              </div>
              <div className={style.projdetail}>
                <h4>{proj.name}</h4>
                <br />
                <p>{proj.detail}</p>
                <div className={style.projtagslist}>
                  {proj.tags.map((tag, idx) => {
                    if (tag == "react") {
                      return (
                        <p key={idx}>
                          <FaReact />
                        </p>
                      );
                    } else if (tag == "nextjs") {
                      return (
                        <p key={idx}>
                          <SiNextDotJs />
                        </p>
                      );
                    } else if (tag == "framer") {
                      return (
                        <p key={idx}>
                          <SiFramer />
                        </p>
                      );
                    } else if (tag == "node") {
                      return (
                        <p key={idx}>
                          <FaNodeJs />
                        </p>
                      );
                    }
                    return;
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
