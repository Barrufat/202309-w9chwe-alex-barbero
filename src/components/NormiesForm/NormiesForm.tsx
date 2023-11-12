import { useState } from "react";
import NormieStructure from "../../store/feature/normies/types";
import Button from "../Button/Button";
import NormiesFormStyled from "./NormiesFormStyled";

interface FilmFormProps {
  submitAction: () => void;
}

const FilmForm = ({ submitAction }: FilmFormProps) => {
  const initialFilm: NormieStructure = {
    id: 0,
    name: "",
    age: 0,
    urbanTribe: "",
    description: "",
    images: [],
    isNormie: false,
  };

  const [newNormie, setNewNormie] = useState<NormieStructure>(initialFilm);
  const [newImage, setNewImage] = useState<string>("");

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

    console.log(newNormie);
  };
  const updateNewImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewImage(event.target.value);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNewNormie((currentNewNormie) => ({
      ...currentNewNormie,
      images: [...currentNewNormie.images, newImage],
    }));

    submitAction();
  };

  return (
    <NormiesFormStyled onSubmit={onFormSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        value={newNormie.name}
        onChange={updateNewNormie}
      />
      <label htmlFor="age">Age: </label>
      <input
        type="number"
        id="age"
        value={newNormie.age}
        onChange={updateNewNormie}
      />
      <label htmlFor="urbanTribe">Urban Tribe: </label>
      <input
        type="text"
        id="urbanTribe"
        value={newNormie.urbanTribe}
        onChange={updateNewNormie}
      />
      <label htmlFor="description">Description: </label>
      <textarea
        id="description"
        value={newNormie.description}
        onChange={updateNewNormie}
      />
      <label htmlFor="image">Image url: </label>
      <input type="url" id="image" value={newImage} onChange={updateNewImage} />
      <label htmlFor="isNormie">Is a normie? </label>
      <input
        type="checkbox"
        id="isNormie"
        checked={newNormie.isNormie}
        onChange={updateNewNormie}
      />
      <Button type={"submit"} text={"Create new Normie"} />
    </NormiesFormStyled>
  );
};

export default FilmForm;
