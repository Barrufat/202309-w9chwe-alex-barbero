import { http, HttpResponse } from "msw";
import { normiesMock } from "./normiesMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/normies`, async () => {
    return HttpResponse.json(normiesMock);
  }),
];
