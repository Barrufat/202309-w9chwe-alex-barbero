import normiesMock from "../../../mocks/normiesMock";
import { loadNormiesActionCreator, normiesReducer } from "./normiesSlice";
import NormieStructure from "./types";

describe("Given a normiesReducter", () => {
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
});
