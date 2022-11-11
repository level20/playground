import { Author } from "./author";
import { Category } from "./category";
import { Content } from "./content";

export interface BlogPost extends Content {
  title: string;
  body: string;
  author: Author;
  categories: Category[];
  slug: string;
}
