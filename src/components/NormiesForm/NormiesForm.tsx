import { useState } from "react";
import NormieStructure from "../../store/feature/normies/types";
import Button from "../Button/Button";
import NormiesFormStyled from "./NormiesFormStyled";

interface FilmFormProps {
  submitAction: (newNormie: NormieStructure) => void;
}

const FilmForm = ({ submitAction }: FilmFormProps) => {
  const initialFilm: NormieStructure = {
    id: 0,
    name: "",
    age: 0,
    urbanTribe: "",
    description: "",
    image: "",
    isNormie: false,
  };

  const [newNormie, setNewNormie] = useState<NormieStructure>(initialFilm);

  const updateNewNormie = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewNormie((currentNewNormie) => ({
      ...currentNewNormie,
      [event.target.id]:
        event.target.id === "isNormie"
          ? !currentNewNormie.isNormie
          : event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitAction(newNormie);
  };

  return (
    <NormiesFormStyled onSubmit={onFormSubmit}>
      <label className="form__label" htmlFor="name">
        Name:
      </label>
      <input
        required
        type="text"
        id="name"
        value={newNormie.name}
        onChange={updateNewNormie}
      />
      <label className="form__label" htmlFor="age">
        Age:
      </label>
      <input
        required
        type="number"
        id="age"
        value={newNormie.age}
        onChange={updateNewNormie}
      />
      <label className="form__label" htmlFor="urbanTribe">
        Urban Tribe:
      </label>
      <input
        required
        type="text"
        id="urbanTribe"
        value={newNormie.urbanTribe}
        onChange={updateNewNormie}
      />
      <label className="form__label" htmlFor="description">
        Description:
      </label>
      <textarea
        className="form__description"
        required
        id="description"
        value={newNormie.description}
        onChange={updateNewNormie}
      />
      <label className="form__label" htmlFor="image">
        Image url:
      </label>
      <input
        type="url"
        id="image"
        value={newNormie.image}
        onChange={updateNewNormie}
      />
      <label className="form__label" htmlFor="isNormie">
        Is a normie?
      </label>
      <input
        type="checkbox"
        id="isNormie"
        checked={newNormie.isNormie}
        onChange={updateNewNormie}
      />
      <Button
        className={"button--create-new"}
        type={"submit"}
        text={"Create new Normie"}
      />
    </NormiesFormStyled>
  );
};

export default FilmForm;
