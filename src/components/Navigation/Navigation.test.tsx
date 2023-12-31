import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When rendered", () => {
    test("It should show 'Add New' inside a Link", () => {
      const expectedLinkText = "Add New";
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const linkElement = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(linkElement).toBeInTheDocument();
    });
  });
});
