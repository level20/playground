import groq from "groq";

import { Creation } from "../models/creation";
import { client } from "./query.service";

const getCreationsQuery = groq`
  *[_type == "creation"]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    "description": description[0].children[0].text,
    "href": link,
    "coverSrc": mainImage.asset->.url,
    "author": author->{name, "image": image.asset->url},
    "categories": categories[]->{title, description},
    "slug": slug.current,
  }`;

const getCreations = async (): Promise<Creation[]> => {
  return await client.fetch(getCreationsQuery);
};

export { getCreations };
