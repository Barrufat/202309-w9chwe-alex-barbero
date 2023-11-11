import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("It should show 'Take a look at the Born Warriors' in a heading", () => {
      const expectedHeadingText = "Take a look at the Born Warriors";
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
