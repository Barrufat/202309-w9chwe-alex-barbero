import { Navigate, Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import getImage from "../getImage/getImage";
import { BackgroundStyled, AppStyled } from "./AppStyled";
import NormiesPage from "../../pages/NormiesPage/NormiesPage";
import NormiesFormPage from "../../pages/NormiesFormPage/NormiesFormPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useNormiesApi from "../../hooks/useNormiesApi";
import { loadNormiesActionCreator } from "../../store/feature/normies/normiesSlice";

const App = () => {
  const { getNormies } = useNormiesApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadNormiesActionCreator(await getNormies()));
    })();
  }, [dispatch, getNormies]);
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
