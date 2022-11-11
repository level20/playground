import { createClient } from "next-sanity";
import { Author } from "../models/author";

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

const getAuthorQuery = `
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

const getAuthors = async (): Promise<Author[]> => {
  return await client.fetch(getAuthorQuery);
};

export { getAuthors };
