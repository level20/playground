import { Author } from "./author";
import { Category } from "./category";
import { SlugContent } from "./content";

export interface BlogPost extends SlugContent {
  title: string;
  body: string;
  summary: string;
  author: Author;
  categories: Category[];
}
