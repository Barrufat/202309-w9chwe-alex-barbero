import { screen } from "@testing-library/react";

import customRender from "../../mocks/utils/customRender";
import NormiesFormPage from "./NormiesFormPage";

describe("Given a NormiesFormPage", () => {
  describe("When it's rendered", () => {
    test("It should show 'Add a new Normie' in a heading", () => {
      const expectedHeadingText = "Add a new Normie";

      customRender(<NormiesFormPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
