import { Author } from "./author";
import { Category } from "./category";
import { SlugContent } from "./content";

export interface Creation extends SlugContent {
  title: string;
  description: string;
  coverSrc: string;
  href: string;
  author: Author;
  categories: Category[];
}
