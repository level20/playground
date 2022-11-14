import groq from "groq";
import { createClient } from "next-sanity";
import { ContentType } from "../enums/content-type.enum";

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

const getSlugPathsQuery = groq`*[_type == $type && defined(slug.current)][].slug.current`;

const getSlugPaths = async (type: ContentType): Promise<string[]> => {
  return await client.fetch(getSlugPathsQuery, { type });
};

export { client, getSlugPaths };
