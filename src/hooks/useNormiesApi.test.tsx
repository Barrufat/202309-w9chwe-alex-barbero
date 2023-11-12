import { renderHook } from "@testing-library/react";
import { normiesMock } from "../mocks/normiesMock";
import NormieStructure from "../store/feature/normies/types";
import useNormiesApi from "./useNormiesApi";

describe("Given a custom hook", () => {
  describe("When it fetches Normies from the API", () => {
    test("It should return some normies", async () => {
      const expectedNormies: NormieStructure[] = normiesMock;

      const { result } = renderHook(() => useNormiesApi());

      const loadNormies = async () => {
        const normies = await result.current.getNormies();

        return normies;
      };

      const normies = await loadNormies();

      expect(normies).toStrictEqual(expectedNormies);
    });
  });
});
