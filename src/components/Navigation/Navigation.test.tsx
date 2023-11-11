import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When rendered", () => {
    test("It should show 'Add New' inside a Button", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );
    });
  });
});
