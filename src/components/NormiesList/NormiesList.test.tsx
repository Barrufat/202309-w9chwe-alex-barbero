import { screen } from "@testing-library/react";
import NormiesList from "./NormiesList";
import { normiesMock } from "../../mocks/normiesMock";
import customRender from "../../mocks/utils/customRender";

describe("Given a NormiesList component", () => {
  describe("When it recieves a list of normies", () => {
    test("it should show 'Morticia Darks", () => {
      const expectedHeadingTitle = "Morticia Darks";
      customRender(<NormiesList normies={normiesMock} />);

      const normieHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(normieHeadingElement).toBeInTheDocument();
    });
  });
});
