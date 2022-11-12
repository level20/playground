import { createClient } from "next-sanity";
import groq from "groq";
import { Creation } from "../models/creation";

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

const getCreationsQuery = groq`
*[_type == "creation"]{
  title,
  "description": description[0].children[0].text,
  "href": link,
  "coverSrc": mainImage.asset->.url
}`;

const getCreations = async (): Promise<Creation[]> => {
  return await client.fetch(getCreationsQuery);
};

export { getCreations };
