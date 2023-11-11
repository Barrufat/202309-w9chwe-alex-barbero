import { render, screen } from "@testing-library/react";
import NormiesList from "./NormiesList";
import normiesMock from "../../mocks/normiesMock";

describe("Given a NormiesList component", () => {
  describe("When it recieves a list of normies", () => {
    test("it should show 'Anastasia Darks", () => {
      const expectedHeadingTitle = "Anastasia Darks";
      render(<NormiesList normies={normiesMock} />);

      const normieHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(normieHeadingElement).toBeInTheDocument();
    });
  });
});
