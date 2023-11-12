import NormiesForm from "../../components/NormiesForm/NormiesForm";

const NormiesFormPage = () => {
  const addCurrentFilm = () => {
    console.log("New Normie added!");
  };

  return (
    <>
      <h1 className="add-title">Add a new Normie</h1>
      <NormiesForm submitAction={addCurrentFilm} />
    </>
  );
};

export default NormiesFormPage;
