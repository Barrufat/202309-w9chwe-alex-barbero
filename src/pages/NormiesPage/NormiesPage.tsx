import { useDispatch } from "react-redux";
import NormiesList from "../../components/NormiesList/NormiesList";
import normiesMock from "../../mocks/normiesMock";
import { loadNormiesActionCreator } from "../../store/feature/normies/normiesSlice";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";

const NormiesPage = () => {
  const warriors = useAppSelector((state) => state.normiesState.normies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNormiesActionCreator(normiesMock));
  }, [dispatch]);

  return (
    <>
      <NormiesList normies={warriors} />
    </>
  );
};

export default NormiesPage;
