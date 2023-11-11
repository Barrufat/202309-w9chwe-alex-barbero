import NormieCard from "../../components/NormieCard/NormieCard";
import normiesMock from "../../mocks/normiesMock";

const NormiesPage = () => {
  return (
    <>
      <h2>Take a look at the Born Warriors</h2>
      {normiesMock.map((normie) => (
        <NormieCard key={normie.id} normie={normie} />
      ))}
    </>
  );
};

export default NormiesPage;
