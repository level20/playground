import { Content } from "./content";

export interface Creation extends Content {
  title: string;
  description: string;
  coverSrc: string;
  href: string;
}