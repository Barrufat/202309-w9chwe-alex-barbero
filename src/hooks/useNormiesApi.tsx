import { useCallback } from "react";
import NormieStructure from "../store/feature/normies/types";

const useNormiesApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getNormies = useCallback(async (): Promise<NormieStructure[]> => {
    const response = await fetch(`${apiUrl}/normies`);
    const Normie = (await response.json()) as NormieStructure[];

    return Normie;
  }, [apiUrl]);

  const updateNormieRelation = useCallback(
    async (
      normieId: number,
      normieState: boolean | undefined,
    ): Promise<void> => {
      try {
        const response = await fetch(`${apiUrl}/normies/${normieId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isFriend: normieState }),
        });

        if (!response.ok) {
          throw new Error();
        }
      } catch {
        throw new Error();
      }
    },
    [apiUrl],
  );

  const addNewNormie = useCallback(
    async (newNormie: NormieStructure): Promise<void> => {
      await fetch(`${apiUrl}/normies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNormie),
      });
    },
    [apiUrl],
  );

  return {
    getNormies,
    updateNormieRelation,
    addNewNormie,
  };
};

export default useNormiesApi;
