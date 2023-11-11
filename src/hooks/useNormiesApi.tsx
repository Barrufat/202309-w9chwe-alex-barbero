import { useCallback } from "react";
import NormieStructure from "../store/feature/normies/types";

const useNormiesApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getNormies = useCallback(async (): Promise<NormieStructure[]> => {
    const response = await fetch(`${apiUrl}/normies`);
    const Normie = (await response.json()) as NormieStructure[];

    return Normie;
  }, [apiUrl]);

  return {
    getNormies,
  };
};

export default useNormiesApi;
