import { screen } from "@testing-library/react";
import customRender from "../../mocks/utils/customRender";
import NormiesForm from "./NormiesForm";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a NormiesForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it's rendered' ", () => {
    test("It should show 'Create new Normie' in a Button", async () => {
      const expectedButtonText = "Create new Normie";

      customRender(<NormiesForm submitAction={actionOnClick} />);

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(formButtonElement).toBeInTheDocument();
    });
  });
});
