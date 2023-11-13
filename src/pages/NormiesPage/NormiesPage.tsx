import NormiesList from "../../components/NormiesList/NormiesList";
import { useAppSelector } from "../../store/hooks";

const NormiesPage = () => {
  const warriors = useAppSelector((state) => state.normiesState.normies);

  return <NormiesList normies={warriors} />;
};

export default NormiesPage;
