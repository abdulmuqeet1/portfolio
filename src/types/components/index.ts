// projDetailBox
export interface ProjectDataProps {
  projectID: number | string;
  title: string;
  detail?: string;
  pageUrl: string;
  repoUrl?: string;
  siteUrl?: string;
  pictureUrl: string;
  category: string;

  yearBuilt: number;
}

export interface ProjectListBoxProps {
  data: ProjectDataProps;
}

// tab panel
export interface ProjectTabPanelProps {
  projectID?: number | string;
  title: string;
  detail?: string;
  pageUrl: string;
  repoUrl?: string;
  siteUrl?: string;
  pictureUrl: string;
  tag?: string | string[];
}

export interface projectDataProps {
  tabValue: string;
  projDataList: ProjectTabPanelProps[];
}
