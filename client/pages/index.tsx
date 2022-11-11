import { createClient } from "next-sanity";
import CreationList, { Creation } from "../components/creation/creation-list";
import DefaultLayout from "../components/layout/default-layout";

export interface HomeProps {
  creations: Creation[];
}

export default function Home({ creations }: HomeProps) {
  return (
    <DefaultLayout headerTitle="Creations">
      <CreationList creations={creations}></CreationList>
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
