import CreationContainer, { Creation } from "../components/creation-container";
import { createClient } from "next-sanity";
import DefaultLayout from "../components/layout/default-layout";

export interface HomeProps {
  creations: Creation[];
}

export default function Home({ creations }: HomeProps) {
  return (
    <DefaultLayout>
      <CreationContainer creations={creations}></CreationContainer>
    </DefaultLayout>
  );
}

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

export async function getStaticProps() {
  const creations = await client.fetch(`*[
    _type == "creation"
  ]
  {
    title,
    "description": description[0].children[0].text,
    "href": link,
    "coverSrc": mainImage.asset->.url
  }`);

  return {
    props: {
      creations,
    },
  };
}
