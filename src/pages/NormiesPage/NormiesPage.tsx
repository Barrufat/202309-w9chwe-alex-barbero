import { useDispatch } from "react-redux";
import NormiesList from "../../components/NormiesList/NormiesList";
import { loadNormiesActionCreator } from "../../store/feature/normies/normiesSlice";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import useNormiesApi from "../../hooks/useNormiesApi";

const NormiesPage = () => {
  const warriors = useAppSelector((state) => state.normiesState.normies);
  const { getNormies } = useNormiesApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadNormiesActionCreator(await getNormies()));
    })();
  }, [dispatch, getNormies]);

  return (
    <>
      <NormiesList normies={warriors} />
    </>
  );
};

export default NormiesPage;
