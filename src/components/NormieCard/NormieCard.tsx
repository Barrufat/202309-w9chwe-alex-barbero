import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGun, faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import NormieStructure from "../../store/feature/normies/types";
import Button from "../Button/Button";
import { NormieCardStyled } from "./NormieCardStyled";
import {
  killEnemyActionCreator,
  loveFriendActionCreator,
} from "../../store/feature/normies/normiesSlice";

interface NormieCardProps {
  normie: NormieStructure;
}

const NormieCard = ({
  normie: {
    id,
    age,
    description,
    images,
    isNormie,
    name,
    urbanTribe,
    isFriend,
  },
}: NormieCardProps) => {
  const dispatch = useDispatch();

  const loveNormie = (warriorId: number) => {
    dispatch(loveFriendActionCreator(warriorId));
  };

  const killNormie = (warriorId: number) => {
    dispatch(killEnemyActionCreator(warriorId));
  };

  return (
    <NormieCardStyled>
      <h2 className="warrior-title">{name}</h2>
      <div
        className={`warrior warrior${isNormie ? "--normie" : "--darks"}${
          isFriend ? "warrior--friend" : "warrior--enemy"
        }`}
      >
        <div className="warrior__image-box">
          <img
            className="warrior__image"
            src={images[0]}
            alt={name}
            height="200"
            width="200"
          />
          <div className="warrior__control-box">
            <Button
              type="button"
              text={
                <FontAwesomeIcon
                  title="kill-normie"
                  size="2xl"
                  icon={faGun}
                  style={{ color: "#ffffff" }}
                />
              }
              actionOnClick={() => {
                killNormie(id);
              }}
            />
            <Button
              type="button"
              text={
                <FontAwesomeIcon
                  title="delete-normie"
                  size="2xl"
                  icon={faTrashCan}
                  style={{ color: "#a3a3a3" }}
                />
              }
            />
            <Button
              type="button"
              text={
                <FontAwesomeIcon
                  title="love-normie"
                  size="2xl"
                  icon={faHeart}
                  style={{ color: "#d10000" }}
                />
              }
              actionOnClick={() => {
                loveNormie(id);
              }}
            />
          </div>
        </div>
        <div className="warrior__data-box">
          <span>
            Tribe: <span className="warrior__data">{urbanTribe}</span>
          </span>
          <span>
            Age: <span className="warrior__data">{age}</span>
          </span>
        </div>
        <p>{description}</p>
        {typeof isFriend !== "undefined" && (
          <img
            src={`./${isFriend ? "love" : "kill"}.png`}
            className={`warrior__modifier${isFriend ? "--friend" : "--enemy"}`}
            alt={`${isFriend ? "loved " : "hated "}${name}`}
          />
        )}
      </div>
    </NormieCardStyled>
  );
};

export default NormieCard;
