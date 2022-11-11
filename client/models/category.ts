import { Content } from "./content";

export interface Category extends Content {
  title: string;
  description?: string;
}
