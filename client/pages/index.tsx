import CreationContainer from "../components/creation-container";
import DefaultLayout from "../components/layout/default-layout";

const Home = () => {
  return (
    <DefaultLayout headerTitle="Creations">
      <CreationContainer></CreationContainer>
    </DefaultLayout>
  );
};

export default Home;
