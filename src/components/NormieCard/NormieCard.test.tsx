import { screen } from "@testing-library/react";
import NormieCard from "./NormieCard";
import { normiesMock } from "../../mocks/normiesMock";
import customRender from "../../mocks/utils/customRender";

describe("Given a NormieCard", () => {
  describe("When it recieves Morticia Darks", () => {
    test("It should show 'Morticia Darks' in a heading", () => {
      const normieMock = normiesMock[0];

      customRender(<NormieCard normie={normieMock} />);

      const normieHeadingElement = screen.getByRole("heading", {
        name: normieMock.name,
      });

      expect(normieHeadingElement).toBeInTheDocument();
    });
  });
});
