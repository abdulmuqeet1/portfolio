import { projectType, HomeProjListDatProps } from "../types";

const projectList: projectType[] = [
  {
    projectID: 1201,
    title: "ColorPal Web App",
    detail: "Built a color library app using Nextjs for UI development",
    pageUrl: "/projects/project/1201",
    repoUrl: "https://github.com/abdulmuqeet1/colorpal",
    pictureUrl: "/assets/projectImages/colorpal.png",
    tag: "react",
  },
  {
    projectID: 1202,
    title: "ThreeJS Blade Model",
    detail: "3D Model built using threejs and blender.",
    pageUrl: "/projects/project/1202",
    repoUrl: "#",
    pictureUrl: "/assets/projectImages/threeBlade.png",
    tag: "threejs",
  },
  {
    projectID: 1203,
    title: "Noor Al Huda Trading Website",
    detail: "Built a website for Noor al Huda Trading LLC UAE.",
    pageUrl: "/projects/project/1203",
    repoUrl: "https://github.com/abdulmuqeet1/Noor-AL-Huda",
    pictureUrl: "/assets/projectImages/nooralhuda.png",
    tag: "frontend",
  },
  {
    projectID: 1204,
    title: "ColVert NPM Package",
    detail: "Built a npm package to convert color value into other values.",
    pageUrl: "/projects/project/1204",
    repoUrl: "https://github.com/abdulmuqeet1/colvert",
    pictureUrl: "/assets/projectImages/npmpackage.png",
    tag: "node",
  },
  {
    projectID: 1205,
    title: "ThreeJS Helmet Model",
    detail: "3D Model built using threejs and blender.",
    pageUrl: "/projects/project/1205",
    repoUrl: "#",
    pictureUrl: "/assets/projectImages/threeHelmet.png",
    tag: "threejs",
  },
];

const homeProjListData: HomeProjListDatProps[] = [
  {
    projectID: 1201,
    title: "ColorPal Web App",
    detail: "Built a color library app using Nextjs for UI development",
    pageUrl: "/projects/project/1201",
    repoUrl: "https://github.com/abdulmuqeet1/colorpal",
    pictureUrl: "/assets/projectImages/colorpal.png",
    category: "dev and design",
    yearBuilt: 2021,
  },
  {
    projectID: 1202,
    title: "ThreeJS Blade Model",
    detail: "3D Model built using threejs and blender.",
    pageUrl: "/projects/project/1202",
    repoUrl: "#",
    pictureUrl: "/assets/projectImages/threeBlade.png",
    category: "dev and design",
    yearBuilt: 2022,
  },
  {
    projectID: 1203,
    title: "Noor Al Huda Trading Website",
    detail: "Built a website for Noor al Huda Trading LLC UAE.",
    pageUrl: "/projects/project/1203",
    repoUrl: "https://github.com/abdulmuqeet1/Noor-AL-Huda",
    pictureUrl: "/assets/projectImages/nooralhuda.png",
    category: "dev and design",
    yearBuilt: 2022,
  },
  {
    projectID: 1204,
    title: "ColVert NPM Package",
    detail: "Built a npm package to convert color value into other values.",
    pageUrl: "/projects/project/1204",
    repoUrl: "https://github.com/abdulmuqeet1/colvert",
    pictureUrl: "/assets/projectImages/npmpackage.png",
    category: "dev and design",
    yearBuilt: 2022,
  },
];
export { projectList, homeProjListData };
