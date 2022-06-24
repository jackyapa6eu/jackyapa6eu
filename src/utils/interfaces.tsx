//ProjectPage & Project

export interface ProjectPageMatchParams {
  name: string
}

export interface Ilinks {
  type: string,
  url: string,
  urlText: string
}

export interface Iproject {
  name: string,
  title: string,
  description: string,
  imgLink: string,
  texts: string[],
  links: Ilinks[]
}

export interface IProps {
  data: Iproject;
}

interface ILink {
  type: string,
  url: string,
  urlText: string
}

export interface IProjectLinkProps {
  data: ILink;
}