interface projectType {
  projectID: number | string;
  title: string;
  detail?: string;
  pageUrl: string;
  repoUrl?: string;
  pictureUrl: string;
  tag: string | string[];
}

type ProjectListType = projectType[];

const projectList: ProjectListType = [
  {
    projectID: 1201,
    title: "some Project title",
    detail:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    pageUrl: "url here",
    repoUrl: "github repo URl",
    pictureUrl: "picture/thumbnail url",
    tag: "frontEnd",
  },
  {
    projectID: 1202,
    title: "some Project title",
    detail:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    pageUrl: "url here",
    repoUrl: "github repo URl",
    pictureUrl: "picture/thumbnail url",
    tag: "react",
  },
  {
    projectID: 1203,
    title: "some Project title",
    detail:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    pageUrl: "url here",
    repoUrl: "github repo URl",
    pictureUrl: "picture/thumbnail url",
    tag: "nextJS",
  },
  {
    projectID: 1204,
    title: "some Project title",
    detail:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    pageUrl: "url here",
    repoUrl: "github repo URl",
    pictureUrl: "picture/thumbnail url",
    tag: "frontend",
  },
  {
    projectID: 1205,
    title: "some Project title",
    detail:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    pageUrl: "url here",
    repoUrl: "github repo URl",
    pictureUrl: "picture/thumbnail url",
    tag: "nodeJS",
  },
];

interface HomeProjListDatProps extends Omit<projectType, "tag"> {
  category: string;
  yearBuilt: number;
}

const homeProjListData: HomeProjListDatProps[] = [
  {
    projectID: 1201,
    pageUrl: "#",
    repoUrl: "#",
    pictureUrl: "/assets/projectDesign.jpg",
    title: "some Project title",
    detail:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    category: "dev and design",
    yearBuilt: 2021,
  },
  {
    projectID: 1202,
    pageUrl: "#",
    repoUrl: "#",
    pictureUrl: "/assets/projectDesign.jpg",
    title: "some Project title #2",
    detail:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    category: "dev and design",
    yearBuilt: 2021,
  },
  {
    projectID: 1203,
    pageUrl: "#",
    repoUrl: "#",
    pictureUrl: "/assets/projectDesign.jpg",
    title: "some Project title #2",
    detail:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    category: "dev and design",
    yearBuilt: 2022,
  },
  {
    projectID: 1204,
    pageUrl: "#",
    repoUrl: "#",
    pictureUrl: "/assets/projectDesign.jpg",
    title: "some Project title #2",
    detail:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    category: "dev and design",
    yearBuilt: 2022,
  },
];
export { projectList, homeProjListData };
