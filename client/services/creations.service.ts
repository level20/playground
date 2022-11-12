import groq from "groq";

import { Creation } from "../models/creation";
import { client } from "./query.service";

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
