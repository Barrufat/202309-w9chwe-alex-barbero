import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { normiesReducer } from "../../store/feature/normies/normiesSlice";
import { normiesMock } from "../normiesMock";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      normiesState: normiesReducer,
    },
    preloadedState: { normiesState: { normies: normiesMock } },
  });

  render(
    <BrowserRouter>
      <Provider store={mockStore}>{children}</Provider>
    </BrowserRouter>,
  );
};

export default customRender;
