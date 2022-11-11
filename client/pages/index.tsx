import { createClient } from "next-sanity";
import CreationList from "../components/creation/creation-list";
import DefaultLayout from "../components/layout/default-layout";
import { Creation } from "../models/creation";
import { getCreations } from "../services/creations.service";

export interface HomeProps {
  creations: Creation[];
}

const Home = ({ creations }: HomeProps) => {
  return (
    <DefaultLayout headerTitle="Creations">
      <CreationList creations={creations}></CreationList>
    </DefaultLayout>
  );
};

const client = createClient({
  projectId: "23sk8kbd",
  dataset: "production",
  apiVersion: "2022-11-10",
  useCdn: false,
});

export async function getStaticProps() {
  const creations = await getCreations();
  return {
    props: {
      creations,
    },
  };
}

export default Home;
