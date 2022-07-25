export type numStr = number | string;

export interface projectType {
  projectID: number | string;
  title: string;
  detail?: string;
  pageUrl: string;
  repoUrl?: string;
  siteUrl?: string;
  pictureUrl: string;
  tag: string | string[];
}

export interface HomeProjListDatProps extends Omit<projectType, "tag"> {
  category: string;
  yearBuilt: number;
}
