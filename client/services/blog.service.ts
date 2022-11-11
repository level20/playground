import { createClient } from "next-sanity";

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

const getBlogPosts = async (): Promise<any[]> => {
  return await client.fetch(`*[_type == "post"]`);
};

export { getBlogPosts };
