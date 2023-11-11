import normieStructure from "../../store/feature/normies/types";
import { NormieBoxStyled, NormieCardStyled } from "./NormieCardStyled";

interface NormieCardProps {
  normie: normieStructure;
}

const NormieCard = ({
  normie: { age, description, images, isNormie, name, urbanTribe, isFriend },
}: NormieCardProps) => {
  return (
    <NormieCardStyled
      className={`${isNormie ? "warrior-normie" : "warrior-darks"}${
        isFriend ? "warrior-friend" : "warrior-enemy"
      }`}
    >
      <h2>{name}</h2>
      <NormieBoxStyled urlImg={images[0]}>
        <span>{urbanTribe}</span>
        <span>{age}</span>
        <p>{description}</p>
      </NormieBoxStyled>
    </NormieCardStyled>
  );
};

export default NormieCard;
