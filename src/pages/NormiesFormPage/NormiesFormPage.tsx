import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NormiesForm from "../../components/NormiesForm/NormiesForm";
import { addNewNormieActionCreator } from "../../store/feature/normies/normiesSlice";
import NormieStructure from "../../store/feature/normies/types";
import useNormiesApi from "../../hooks/useNormiesApi";

const NormiesFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addNewNormie } = useNormiesApi();

  const addCurrentNormie = (newNormie: NormieStructure) => {
    addNewNormie(newNormie);
    dispatch(addNewNormieActionCreator(newNormie));
    navigate("/home");
  };

  return (
    <>
      <h1 className="add-title">Add a new Normie</h1>
      <NormiesForm submitAction={addCurrentNormie} />
    </>
  );
};

export default NormiesFormPage;
