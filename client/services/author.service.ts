import groq from "groq";

import { Author } from "../models/author";
import { client } from "./query.service";

const getAuthorsQuery = groq`
  *[_type == "author"]  {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    "image": image.asset->url,  
    "bio": bio[0].children[0].text,
    "slug": slug.current  
  }
`;

const getAuthorQuery = groq`
  *[_type == "author" && slug.current == $slug]  {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    "image": image.asset->url,  
    "bio": bio[0].children[0].text,
    "slug": slug.current  
  }
`;

const getSlugPathsQuery = groq`*[_type == "author" && defined(slug.current)][].slug.current`;

const getAuthors = async (): Promise<Author[]> => {
  return await client.fetch(getAuthorsQuery);
};

const getAuthor = async (slug: string): Promise<Author> => {
  const posts = await client.fetch(getAuthorQuery, { slug });
  return posts[0];
};

const getSlugPaths = async (): Promise<string[]> => {
  return await client.fetch(getSlugPathsQuery);
};

export { getAuthors, getAuthor, getSlugPaths };
