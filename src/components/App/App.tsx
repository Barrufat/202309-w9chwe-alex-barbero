import getImage from "../getImage/getImage";
import AppStyled from "./AppStyled";

const App = () => {
  return (
    <AppStyled urlImg={getImage()}>
      <h1>Normie Wars</h1>
    </AppStyled>
  );
};

export default App;
