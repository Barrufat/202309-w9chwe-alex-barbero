import NormiesList from "../../components/NormiesList/NormiesList";
import normiesMock from "../../mocks/normiesMock";

const NormiesPage = () => {
  return (
    <>
      <NormiesList normies={normiesMock} />
    </>
  );
};

export default NormiesPage;
