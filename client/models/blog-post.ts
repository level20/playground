import { Author } from "./author";
import { Content } from "./content";

export interface BlogPost extends Content {
  title: string;
  author: Author;
  body: any;
  categories: any;
  slug: any;
}
