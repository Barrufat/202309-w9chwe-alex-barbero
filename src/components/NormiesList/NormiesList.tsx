import normieStructure from "../../store/feature/normies/types";
import NormieCard from "../NormieCard/NormieCard";
import NormiesListStyled from "./NormiesListStyled";

interface NormiesListProps {
  normies: normieStructure[];
}

const NormiesList = ({ normies }: NormiesListProps) => {
  return (
    <NormiesListStyled>
      {normies.map((normie) => (
        <NormieCard key={normie.id} normie={normie} />
      ))}
    </NormiesListStyled>
  );
};

export default NormiesList;
