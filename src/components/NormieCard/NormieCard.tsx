import normieStructure from "../../store/feature/normies/types";
import { NormieCardStyled } from "./NormieCardStyled";

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
      <img src={images[1]} alt={name} height="200" width="200" />
      <h2>{name}</h2>
      <div>
        <span>{urbanTribe}</span>
        <span>{age}</span>
      </div>
      <p>{description}</p>
    </NormieCardStyled>
  );
};

export default NormieCard;
