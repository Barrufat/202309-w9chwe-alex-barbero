import { screen } from "@testing-library/react";

import App from "./App";
import customRender from "../../mocks/utils/customRender";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("It should show 'Anastasia Darks' in a heading", () => {
      const expectedHeadingText = "Anastasia Darks";

      customRender(<App />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
