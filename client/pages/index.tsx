import CreationList from "../components/creation/creation-list";
import DefaultLayout from "../components/layout/default-layout";

const Home = () => {
  return (
    <DefaultLayout headerTitle="Creations">
      <CreationList></CreationList>
    </DefaultLayout>
  );
};

export default Home;
