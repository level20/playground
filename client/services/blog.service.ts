import { createClient } from "next-sanity";
import groq from "groq";
import { BlogPost } from "../models/blog-post";

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

const getBlogPostsQuery = groq`
  *[_type == "post"] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    "body": body[0].children[0].text,
    "summary": summary[0].children[0].text,
    "categories": categories[]->{title, description},
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
    "categories": categories[]->{title, description},
    "author": { "name": author->name, "image": author->image.asset->url, "slug": author->slug.current },
    "slug": slug.current  
  }
`;

const getSlugPathsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;

const getBlogPosts = async (): Promise<BlogPost[]> => {
  return await client.fetch(getBlogPostsQuery);
};

const getBlogPost = async (slug: string): Promise<BlogPost> => {
  const posts = await client.fetch(getBlogPostQuery, { slug });
  return posts[0];
};

const getSlugPaths = async (): Promise<string[]> => {
  return await client.fetch(getSlugPathsQuery);
};

export { getBlogPosts, getSlugPaths, getBlogPost };
