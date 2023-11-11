import { screen } from "@testing-library/react";

import customRender from "../../mocks/utils/customRender";
import NormiesPage from "./NormiesPage";

describe("Given a NormiesPage", () => {
  describe("When recieves a list of Normies", () => {
    test("It should show 'Anastasia Darks' in a heading", () => {
      const expectedHeadingText = "Anastasia Darks";

      customRender(<NormiesPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
