import NormieStructure from "../../store/feature/normies/types";
import NormieCard from "../NormieCard/NormieCard";
import NormiesListStyled from "./NormiesListStyled";

interface NormiesListProps {
  normies: NormieStructure[];
}

const NormiesList = ({ normies }: NormiesListProps) => {
  return (
    <NormiesListStyled>
      {normies.map((normie) => (
        <li key={normie.id}>
          <NormieCard normie={normie} />
        </li>
      ))}
    </NormiesListStyled>
  );
};

export default NormiesList;
