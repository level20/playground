import groq from "groq";

import { BlogPost } from "../models/blog-post";
import { client } from "./query.service";

const getBlogPostsQuery = groq`
  *[_type == "post"] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    "body": body[0].children[0].text,
    "summary": summary[0].children[0].text,
    "categories": categories[]->{title, description, color},
    "author": { "name": author->name, "image": author->image.asset->url, "slug": author->slug.current },
    "slug": slug.current  
  }
`;

const getBlogPostQuery = groq`
  *[_type == "post" && slug.current == $slug] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    "body": body[0].children[0].text,
    "summary": summary[0].children[0].text,
    "categories": categories[]->{title, description, color},
    "author": { "name": author->name, "image": author->image.asset->url, "slug": author->slug.current },
    "slug": slug.current  
  }
`;

const getBlogPosts = async (): Promise<BlogPost[]> => {
  return await client.fetch(getBlogPostsQuery);
};

const getBlogPost = async (slug: string): Promise<BlogPost> => {
  const posts = await client.fetch(getBlogPostQuery, { slug });
  return posts[0];
};

export { getBlogPosts, getBlogPost };
