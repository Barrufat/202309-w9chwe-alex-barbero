import { render, screen } from "@testing-library/react";
import NormieCard from "./NormieCard";
import normiesMock from "../../mocks/normiesMock";

describe("Given a NormieCard", () => {
  describe("When it recieves Anastasia Darks", () => {
    test("It should show 'Anastasia Darks' in a heading", () => {
      const normieMock = normiesMock[0];

      render(<NormieCard normie={normieMock} />);

      const normieHeadingElement = screen.getByRole("heading", {
        name: normieMock.name,
      });

      expect(normieHeadingElement).toBeInTheDocument();
    });
  });
});
