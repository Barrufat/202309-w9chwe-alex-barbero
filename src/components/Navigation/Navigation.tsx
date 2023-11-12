import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className="navigation__box">
        <li>
          <NavLink to="/home">See All</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add New</NavLink>
        </li>
      </ul>
      <div className="navigation__title-box">
        <img
          className="navigation__main-title"
          src="https://fontmeme.com/permalink/231111/59dabfafcbb251b060f8fb0499db4dde.png"
          alt="graffiti-creator"
        />
      </div>
    </NavigationStyled>
  );
};

export default Navigation;
