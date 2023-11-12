import {
  normiesMock,
  modifiedFriendNormiesMock,
  modifiedEnemyNormiesMock,
  normiesAddedMock,
  newNormieMock,
} from "../../../mocks/normiesMock";
import {
  addNewNormieActionCreator,
  killEnemyActionCreator,
  loadNormiesActionCreator,
  loveFriendActionCreator,
  normiesReducer,
} from "./normiesSlice";
import NormieStructure from "./types";

describe("Given a normiesReducer", () => {
  describe("When it recieves the action to load a list of Normies into an empty list", () => {
    test("It should update normies with that list", () => {
      const expectedLoadedNormies: { normies: NormieStructure[] } = {
        normies: normiesMock,
      };

      const previousState: { normies: NormieStructure[] } = {
        normies: [],
      };

      const loadedNormies = normiesReducer(
        previousState,
        loadNormiesActionCreator(normiesMock),
      );

      expect(loadedNormies).toStrictEqual(expectedLoadedNormies);
    });
  });

  describe("When it recives the action to be friends with a Normie of a list", () => {
    test("It should update the list with that Normie being a friend", () => {
      const expectedModifiedNormies: { normies: NormieStructure[] } = {
        normies: modifiedFriendNormiesMock,
      };

      const previousState: { normies: NormieStructure[] } = {
        normies: normiesMock,
      };

      const modifiedNormies = normiesReducer(
        previousState,
        loveFriendActionCreator(1),
      );

      expect(modifiedNormies).toEqual(expectedModifiedNormies);
    });
  });

  describe("When it recives the action to be enemy of a Normie of a list", () => {
    test("It should update the list with that Normie being an enemy", () => {
      const expectedModifiedNormies: { normies: NormieStructure[] } = {
        normies: modifiedEnemyNormiesMock,
      };

      const previousState: { normies: NormieStructure[] } = {
        normies: normiesMock,
      };

      const modifiedNormies = normiesReducer(
        previousState,
        killEnemyActionCreator(2),
      );

      expect(modifiedNormies).toEqual(expectedModifiedNormies);
    });
  });

  describe("When it recives the action to add a Normite to the list", () => {
    test("It should update the list with that Normie", () => {
      const expectedModifiedNormies: { normies: NormieStructure[] } = {
        normies: normiesAddedMock,
      };

      const previousState: { normies: NormieStructure[] } = {
        normies: normiesMock,
      };

      const modifiedNormies = normiesReducer(
        previousState,
        addNewNormieActionCreator(newNormieMock),
      );

      expect(modifiedNormies).toEqual(expectedModifiedNormies);
    });
  });
});
