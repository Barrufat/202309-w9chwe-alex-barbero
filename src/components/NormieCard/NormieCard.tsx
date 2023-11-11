import NormieStructure from "../../store/feature/normies/types";
import { NormieCardStyled } from "./NormieCardStyled";

interface NormieCardProps {
  normie: NormieStructure;
}

const NormieCard = ({
  normie: { age, description, images, isNormie, name, urbanTribe, isFriend },
}: NormieCardProps) => {
  return (
    <NormieCardStyled>
      <h2 className="warrior-title">{name}</h2>
      <div
        className={`warrior warrior${isNormie ? "--normie" : "--darks"}${
          isFriend ? "warrior--friend" : "warrior--enemy"
        }`}
      >
        {" "}
        <img
          className="warrior__image"
          src={images[2]}
          alt={name}
          height="200"
          width="200"
        />
        <div className="warrior__data-box">
          <span className="warrior__tribe">Tribe: {urbanTribe}</span>
          <span className="warrior__age">Age: {age}</span>
        </div>
        <p>{description}</p>
      </div>
    </NormieCardStyled>
  );
};

export default NormieCard;
