import { createClient } from "next-sanity";
import { BlogPost } from "../models/blog-post";

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

const getBlogQuery = `
  *[_type == "post"] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    "body": body[0].children[0].text,
    "summary": summary[0].children[0].text,
    "categories": categories[]->title,
    "author": { "name": author->name, "image": author->image.asset->url },
    "slug": slug.current  
  }
`;

const getBlogPosts = async (): Promise<BlogPost[]> => {
  return await client.fetch(getBlogQuery);
};

export { getBlogPosts };
