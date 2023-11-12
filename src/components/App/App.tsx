import { Navigate, Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import getImage from "../getImage/getImage";
import { BackgroundStyled, AppStyled } from "./AppStyled";
import NormiesPage from "../../pages/NormiesPage/NormiesPage";
import NormiesFormPage from "../../pages/NormiesFormPage/NormiesFormPage";

const App = () => {
  return (
    <>
      <Navigation />
      <BackgroundStyled url={getImage()} />
      <AppStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<NormiesPage />} />
          <Route path="/add" element={<NormiesFormPage />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
